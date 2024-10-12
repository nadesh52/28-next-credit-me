import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    comment: {
      type: String,
    },
    rating: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

const Posts = mongoose.models.Posts || mongoose.model("Posts", postSchema);

export default Posts;
