import express from "express";
import marketingDataRoutes from "./routes/marketingDataRoutes";

const app = express();

app.use(express.json());
app.use("/api/marketing-data", marketingDataRoutes);

export default app;