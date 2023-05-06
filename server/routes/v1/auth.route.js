import express from "express";

const router = express.Router();

router.post("/login", (req, res, next) => {
  res.send("login page");
});

export default router;
