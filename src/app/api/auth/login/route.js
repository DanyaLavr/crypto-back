import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const token = body?.token;

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }
    const response = NextResponse.json({ success: true });
    // const cookieStore = await cookies();
    response.cookies.set("session", token, {
      httpOnly: true,
      path: "/",
    });

    // return NextResponse.json({ success: true });
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
