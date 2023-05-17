import mongoose from "mongoose";
import { toJSON } from "./plugins/index.js";

const todoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
todoSchema.plugin(toJSON);

/**
 * @typedef Todo
 */
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
