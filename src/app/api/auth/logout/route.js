import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    const response = NextResponse.json({ success: true });
    response.cookies.delete("session", {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
