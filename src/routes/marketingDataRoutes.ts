import { Router } from "express";
import { getSignalAndTrades } from "../controllers/strategyController";

const router = Router();

router.get("/signal-and-trades/:symbol", getSignalAndTrades);

export default router;