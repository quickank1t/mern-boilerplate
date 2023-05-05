import express from "express";
import { userController } from "../../controller/index.js";

const router = express.Router();

router
  .route("/")
  .get(userController.getUsers)
  .post(userController.createUser)
  .delete(userController.resetUser);

export default router;
