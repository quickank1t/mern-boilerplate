import httpStatus from "http-status";
import { userService } from "../service/index.js";
import { catchAsync } from "../utils/catchAsync.js";

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const result = await userService.queryUsers();
  res.send(result);
});

const resetUser = catchAsync(async (req, res) => {
  const result = await userService.resetUser();
  res.send(result);
});

const getUserById = async (id) => {
  return User.findById(id);
};

export { createUser, getUsers, resetUser, getUserById };
