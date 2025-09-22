import { connectDB } from "@/dbConfig/dbConfig";

export async function GET(request) {
  connectDB();
  return Response.json({ messge: "testing db connection" });
}
