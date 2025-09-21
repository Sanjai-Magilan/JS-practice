import router from "./routes/route.js";
import express from "express";
import connectDB from "./Database/DB.js";
import logTimestamp from "./middleware/LogDate.js"
const app = express();
app.use(express.json());
connectDB();
const PORT = 3300;
app.use(logTimestamp)
app.use("/dummy", router);
app.listen(PORT, () => console.log("Server started"));