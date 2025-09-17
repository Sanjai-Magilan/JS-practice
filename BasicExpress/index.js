import express from "express";
import router from "./routes/route.js";
const app = express();
const PORT = 3300;
app.use("/dummy", router);
app.listen(PORT, () => console.log("Server started"));
