import express from "express";
import { todoController } from "../../controller/index.js";
import { auth } from "../../middlewares/auth.js";

const router = express.Router();

router
  .route("/")
  .get(auth("getTodo"), todoController.getTodo)
  .post(auth("manageTodo"), todoController.createTodo)
  .delete(auth("manageTodo"), todoController.deleteAllTodo);

router
  .route("/:todoId")
  .get(auth("getTodo"), todoController.getTodoById)
  .delete(auth("getTodo"), todoController.deleteTodoById);

export default router;
