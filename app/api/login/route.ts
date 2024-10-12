import connectDB from "@/libs/db";
import Users from "@/server/models/userModel";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

export async function POST(req: Request) {
  await connectDB();

  try {
    const data = await req.json();
    const user = await Users.findOne({ email: data.email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "user not found" },
        { status: 401 },
      );
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 },
      );
    }

    const { _id, username, email, createdAt, updatedAt } = user;

    const token = jwt.sign({ email: user.email }, SECRET_KEY);

    const userWithoutPassword = {
      id: _id,
      username,
      email,
      createdAt,
      updatedAt,
    };

    return NextResponse.json({
      status: "ok",
      success: true,
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.log("error");
  }
}
