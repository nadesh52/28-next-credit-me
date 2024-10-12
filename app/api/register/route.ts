import connectDB from "@/libs/db";
import Users from "@/server/models/userModel";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

const salt = 10;

export async function POST(req: Request, res: Response) {
  await connectDB();

  try {
    const data = await req.json();
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const existingUser = await Users.findOne({ email: data.email });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 409 },
      );
    }

    const newData = {
      ...data,
      password: hashedPassword,
    };
    
    await Users.create(newData);
    return NextResponse.json({ message: "Register Success!" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
