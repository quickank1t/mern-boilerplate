import mongoose from "mongoose";
import app from "./app.js";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("App listening on port 3000!");
  });
});

export default app;
