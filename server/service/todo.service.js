import { Todo } from "../model/index.js";

const createTodo = async (todoBody) => {
  return await Todo.create(todoBody);
};

const deleteTodo = (id) => {
  return Todo.deleteOne(id);
};

const queryTodo = async (query) => {
  const todo = Todo.find(query);
  return todo;
};

const getTodoById = async (id) => {
  const todo = await Todo.findById(id);
  return todo;
};

const deleteAll = (query) => {
  return Todo.deleteMany(query);
};

export { createTodo, deleteTodo, queryTodo, deleteAll, getTodoById };
