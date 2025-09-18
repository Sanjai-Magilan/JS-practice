import { Schema } from "mongoose";
import mongoose from "mongoose";
const DummySh = new Schema({
  UserName: { type: String, require: true },
  UserId: { type: Number, require: true, unique: true },
  Role: { type: String, require: true, enum: ["user", "admin", "guest"] },
});

export default mongoose.model("schem", DummySh);