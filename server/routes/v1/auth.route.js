import express from "express";
import { authController } from "../../controller/index.js";

const router = express.Router();

router.post("/login", authController.login);
router.post("/logout", authController.logout);

export default router;
