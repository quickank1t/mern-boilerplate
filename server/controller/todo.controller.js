import httpStatus from "http-status";
import { catchAsync } from "../utils/catchAsync.js";
import { todoService } from "../service/index.js";

const getTodo = catchAsync(async (req, res) => {
  const todo = await todoService.queryTodo({ user: req.user.id });
  res.send(todo);
});

const getTodoById = catchAsync(async (req, res) => {
  const todo = await todoService.queryTodo({
    user: req.user.id,
    _id: req.params.todoId,
  });
  res.send(todo);
});

const createTodo = catchAsync(async (req, res) => {
  const payload = req.body;
  payload.user = req.user.id;
  const todo = await todoService.createTodo(payload);
  res.status(httpStatus.CREATED).send(todo);
});

const deleteAllTodo = catchAsync(async (req, res) => {
  await todoService.deleteAll({ user: req.user.id });
  res.status(httpStatus.NO_CONTENT).send();
});

const deleteTodoById = catchAsync(async (req, res) => {
  await todoService.deleteAll({ user: req.user.id, _id: req.params.todoId });
  res.status(httpStatus.NO_CONTENT).send();
});

export { getTodo, createTodo, deleteAllTodo, getTodoById, deleteTodoById };
