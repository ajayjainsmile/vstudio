import { connectDB } from "@/lib/db";  // ✅ IMPORTANT
import Signal from "@/models/Signal";

export async function GET() {
  await connectDB(); // ✅ use

  const signals = await Signal.find();

  return Response.json({
    status: 1,
    data: signals
  });
}