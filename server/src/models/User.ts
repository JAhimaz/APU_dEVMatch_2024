import mongoose from "mongoose";
const Schema = mongoose.Schema

// This is an example Schema for a User model

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  aptosAddr: {
    type: String,
    required: false,
  },
  masAddr: {
    type: String,
    required: false,
  },
  masId: {
    type: Number,
    required: false,
  },
  version: {
    type: Number,
    required: true,
    default: 0,
  }
}, { timestamps: true });

const User = mongoose.model("users", userSchema)
export default User;