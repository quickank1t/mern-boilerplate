import express from "express";
import { userController } from "../../controller/index.js";
import { auth } from "../../middlewares/auth.js";

const router = express.Router();

router
  .route("/")
  .get(userController.getUsers)
  .post(userController.createUser)
  .delete(userController.resetUser);

router.route("/:userId").get(userController.getUserById);

export default router;
