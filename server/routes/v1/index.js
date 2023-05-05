import express from "express";
import userRoute from "../v1/user.route.js";

const router = express.Router();

const defaultRoute = [
  {
    path: "/user",
    route: userRoute,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
