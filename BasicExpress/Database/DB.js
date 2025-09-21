import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({ path: "./BasicExpress/.env" });
const connectDB = async () => {
  console.log("connecting to data base,....");
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection Done ✅");
  } catch (e) {
    console.log("Connection failed Eror occuried");
    throw e;
  }
};

export default connectDB;
