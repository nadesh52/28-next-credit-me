import connectDB from "@/libs/db";
import Users from "@/server/models/userModel";
import Posts from "@/server/models/postModel";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  await connectDB();

  try {
    const { search } = await req.json();

    const matchingUser = await Users.find({
      $or: [{ username: new RegExp(search) }, { name: new RegExp(search) }],
    });

    const userIds = matchingUser.map((user) => user._id);

    const [posts, users] = await Promise.all([
      Posts.find({
        $or: [{ item: new RegExp(search) }, { owner: { $in: userIds } }],
      }).populate("owner", "email username"),
      Users.find({ username: new RegExp(search) }),
    ]);

    return NextResponse.json({ posts, users }, { status: 201 });
  } catch (error) {}
}
