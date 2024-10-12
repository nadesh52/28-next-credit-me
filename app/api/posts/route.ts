import connectDB from "@/libs/db";
import Post from "@/server/models/postModel";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  await connectDB();

  try {
    const posts = await Post.find({})
      .populate("owner", "username email createdAt updatedAt")
      .sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error: any) {
    console.log(error);
  }
}
