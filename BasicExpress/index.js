import express from "express";
import router from "./routes/route.js";
import connectDB from "./Database/DB.js";
const app = express();
app.use(express.json());
connectDB();
const PORT = 3300;
app.use("/dummy", router);
app.listen(PORT, () => console.log("Server started"));