import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const { pathname, origin } = req.nextUrl;
  const session = await getToken({ req });

  if (pathname === "/login") {
    if (session) {
      return NextResponse.redirect(origin);
    }
  }
};
