import express from "express";
import userRoute from "../v1/user.route.js";
import authRoute from "../v1/auth.route.js";
import todoRoute from "../v1/todo.route.js";

const router = express.Router();

const defaultRoute = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/todo",
    route: todoRoute,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
