import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/app/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToDatabase();
    res.status(200).json({ message: "Database connected successfully! 🎉" });
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
}
