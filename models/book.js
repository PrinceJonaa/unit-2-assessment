import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export { Book };
