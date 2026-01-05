import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = request.cookies.get("session")?.value;
  const { pathname } = request.nextUrl;

  if (!session) {
    if (pathname === "/backpack" || pathname.startsWith("/backpack")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (pathname === "/purchase" || pathname.startsWith("/purchase"))
      return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session) {
    if (pathname === "/login" || pathname.startsWith("/login"))
      return NextResponse.redirect(new URL("/", request.url));
    if (pathname === "/register" || pathname.startsWith("/register"))
      return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: [
    "/backpack",
    "/backpack/:path*",
    "/purchase",
    "/purchase/:path*",
    "/login",
    "/register",
  ],
};
