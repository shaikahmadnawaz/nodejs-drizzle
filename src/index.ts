import express, { Request, Response } from "express";

import goldStoreRoutes from "./routes/goldStore.routes";
import orderRoutes from "./routes/order.routes";
import { loggerMiddleware } from "./middlewares/logger.middlewares";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

app.set("trust proxy", true);

app.use(loggerMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Node.js API",
  });
});

app.use("/api/v1", goldStoreRoutes);
app.use("/api/v1", orderRoutes);

const server = app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

export default server;
