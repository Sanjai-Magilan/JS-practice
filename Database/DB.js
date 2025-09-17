import mongoose from "mongoose";
require("dotenv").config();
const connectDB = async () => {
  console.log("connecting to data base,....");
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection Done ✅");
  } catch (e) {
    console.log("Eror occuried");
    throw e;
  }
};

export default connectDB;
