import mongoose from "mongoose";
const DummySh = new mongoose.Schema({
  UserName: { type: String, required: true },
  UserId: { type: Number, required: true, unique: true },
  UserPass: { type: String, required: true },
  Role: { type: String, required: true, enum: ["user", "admin", "guest"] },
});

export default mongoose.model("schem", DummySh);
