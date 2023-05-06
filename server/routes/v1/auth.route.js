import express from "express";
import { authService } from "../../service/index.js";
import { catchAsync } from "../../utils/catchAsync.js";

const router = express.Router();

router.post(
  "/login",
  catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await authService.loginUserWithEmailAndPassword(
      email,
      password
    );
    res.send(user);
  })
);

export default router;
