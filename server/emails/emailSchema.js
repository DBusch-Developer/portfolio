import mongoose from "mongoose";

const Schema = mongoose.Schema;

const emailSchema = new Schema({
  fullName: String,
  email: String,
  subject: String,
  message: String,
});

export default emailSchema;
