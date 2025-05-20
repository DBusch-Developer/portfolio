import mongoose from "mongoose";
import emailSchema from "./emailSchema.js";

emailSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const emailModel = mongoose.model("Email", emailSchema);

export default emailModel;
