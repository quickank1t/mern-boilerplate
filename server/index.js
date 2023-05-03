import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(process.env.PORT, () => {
  console.log("App listening on port 3000!");
});

export default app;
