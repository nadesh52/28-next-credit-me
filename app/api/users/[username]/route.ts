import connectDB from "@/libs/db";
import Users from "@/server/models/userModel";
import Posts from "@/server/models/postModel";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { username: string } },
) {
  await connectDB();

  try {
    const user = await Users.findOne({ username: params.username });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const { _id, username, email, createdAt, updatedAt, bio } = user;
    const userWithoutPassword = {
      id: _id,
      username,
      email,
      createdAt,
      updatedAt,
      bio,
    };

    const posts = await Posts.find({ owner: user._id }).populate("reviewer", "createdAt updatedAt username email");

    return NextResponse.json(
      { user: userWithoutPassword, posts },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
  }
}
