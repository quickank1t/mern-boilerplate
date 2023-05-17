import { User } from "../model/index.js";

const createUser = async (userBody) => {
  return User.create(userBody);
};

const queryUsers = async () => {
  const users = User.find();
  return users;
};

const resetUser = async () => {
  const users = User.deleteMany();
  return users;
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const getUserById = async (id) => {
  return User.findById(id);
};

export { createUser, queryUsers, resetUser, getUserByEmail, getUserById };
