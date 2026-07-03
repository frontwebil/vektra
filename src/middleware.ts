import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Якщо користувач вже залогінений і заходить на /admin/login — перенаправити в /admin
  if (pathname === "/admin/login" && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Якщо не залогінений і заходить на /admin (але не /admin/login) — перенаправити на логін
  if (pathname.startsWith("/admin") && pathname !== "/admin/login" && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
