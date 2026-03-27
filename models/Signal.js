import mongoose from "mongoose";

const SignalSchema = new mongoose.Schema({
  stock: String,
  signal: String,
  price: Number,
  target: Number,
  stopLoss: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Signal || mongoose.model("Signal", SignalSchema);