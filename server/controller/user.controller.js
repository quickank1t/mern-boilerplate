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

const getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    // throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

export { createUser, getUsers, resetUser, getUserById };
