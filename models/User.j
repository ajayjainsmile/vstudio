import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  first_name: String,
  last_name: String,
  created_at: { type: Date, default: Date.now }, // ✅ fixed
  password: String,
  plan: { type: String, default: "free" }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);