import { Storage } from "@google-cloud/storage";
const client = new Storage({
  credentials: {
    audience: "replit",
    subject_token_type: "access_token",
    token_url: "http://127.0.0.1:1106/token",
    type: "external_account",
    credential_source: {
      url: "http://127.0.0.1:1106/credential",
      format: { type: "json", subject_token_field_name: "access_token" },
    },
    universe_domain: "googleapis.com",
  },
  projectId: "",
});
const publicPath = process.env.PUBLIC_OBJECT_SEARCH_PATHS?.split(",")[0];
if (!publicPath) throw new Error("Public storage is not configured");
const [bucket, ...prefix] = publicPath.replace(/^\/+/, "").split("/");
for (const name of ["dinner-night.mp4", "dinner-poster.jpg"]) {
  await client.bucket(bucket).upload(`artifacts/dinner-invitation/public/media/${name}`, {
    destination: [...prefix, "dinner", name].join("/"),
    metadata: { contentType: name.endsWith(".mp4") ? "video/mp4" : "image/jpeg" },
  });
  console.info(`Uploaded ${name}`);
}
