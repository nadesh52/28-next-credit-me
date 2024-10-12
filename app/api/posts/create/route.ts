import connectDB from "@/libs/db";
import Posts from "@/server/models/postModel";
import Users from "@/server/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  await connectDB();

  try {
    const data = await req.json();
    const existUser = await Users.findOne({ _id: data.owner });

    const newData = {
      ...data,
      owner: existUser,
    };

    const newPost = await Posts.create(newData);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
