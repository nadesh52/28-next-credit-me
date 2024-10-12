import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true },
);

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;
