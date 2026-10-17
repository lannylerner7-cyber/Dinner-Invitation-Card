import { Router, type IRouter } from "express";
import healthRouter from "./health";
import dinnerMediaRouter from "./dinner-media";

const router: IRouter = Router();

router.use(healthRouter);
router.use(dinnerMediaRouter);

export default router;
