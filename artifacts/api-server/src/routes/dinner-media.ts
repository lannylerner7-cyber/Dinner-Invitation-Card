import { Router } from "express";
import { ObjectStorageService } from "../lib/objectStorage";

const router = Router();
const storage = new ObjectStorageService();

router.get("/dinner-media/:name", async (req, res) => {
  const name = req.params.name;
  if (!["dinner-night.mp4", "dinner-poster.jpg"].includes(name)) {
    res.sendStatus(404);
    return;
  }
  try {
    const file = await storage.searchPublicObject(`dinner/${name}`);
    if (!file) { res.sendStatus(404); return; }
    const [metadata] = await file.getMetadata();
    const size = Number(metadata.size);
    res.set({
      "Content-Type": name.endsWith(".mp4") ? "video/mp4" : "image/jpeg",
      "Cache-Control": "public, max-age=3600",
      "Accept-Ranges": "bytes",
    });
    const range = req.headers.range;
    let start = 0;
    let end = size - 1;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match || (!match[1] && !match[2])) {
        res.set("Content-Range", `bytes */${size}`).sendStatus(416); return;
      }
      if (!match[1]) start = Math.max(0, size - Number(match[2]));
      else {
        start = Number(match[1]);
        if (match[2]) end = Math.min(end, Number(match[2]));
      }
      if (start > end || start >= size) {
        res.set("Content-Range", `bytes */${size}`).sendStatus(416); return;
      }
      res.status(206).set("Content-Range", `bytes ${start}-${end}/${size}`);
    }
    res.set("Content-Length", String(end - start + 1));
    const stream = file.createReadStream({ start, end });
    stream.on("error", (err) => {
      req.log.error({ err }, "Dinner media stream failed");
      if (!res.headersSent) res.sendStatus(500); else res.destroy();
    });
    res.on("close", () => stream.destroy());
    stream.pipe(res);
  } catch (err) {
    req.log.error({ err }, "Dinner media unavailable");
    if (!res.headersSent) res.sendStatus(500);
  }
});

export default router;
