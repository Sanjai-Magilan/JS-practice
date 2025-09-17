import express from "express";
import router from "./routes/route.js";
import connectDB from "../Database/DB.js";
const app = express();
connectDB();
const PORT = 3300;
app.use("/dummy", router);
app.listen(PORT, () => console.log("Server started"));
