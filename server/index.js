import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import emailRouter from "./emails/index.js";
import blogRouter from "./blog/index.js"

const app = express();
app.use(express.json()); // To parse request body
app.use(cors());
const port = 8010;

const mongoURL = process.env.MONGODB_CONNECTION_STRING || "";
const mainDB = async () => {
  await mongoose.connect(mongoURL);
  console.log(`Connected to ${mongoURL}`);
};
mainDB().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/emails", emailRouter);
app.use("/blog", blogRouter)

app.listen(port, () => {
  console.log(`Portfolio app listening on port ${port}`);
});
