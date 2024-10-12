import connectDB from "@/libs/db";
import Posts from "@/server/models/postModel";
import Users from "@/server/models/userModel";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } },
) {
  await connectDB();

  try {
    const post = await Posts.findById(params.postId);
    console.log(post);
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
