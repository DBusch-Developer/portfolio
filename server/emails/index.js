import "dotenv/config";
import express from "express";
import emailCreate from "./emailCreate.js";

const emailRouter = express.Router();

emailRouter.post("/", emailCreate);

export default emailRouter;