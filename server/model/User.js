import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

export default User = mongoose.model("User", userSchema);
