import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/v1/index.js";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/v1", router);

export default app;
