import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(
  function middleware(req) {
    // callback permission to working
    const { pathname, origin } = req.nextUrl;
    const { token } = req.nextauth;
    if (token && pathname === "auth") {
      return NextResponse.redirect(origin);
    }
  },
  {
    callbacks: {
      authorized({ token, req }) {
        const { pathname } = req.nextUrl;
        if (pathname === "/auth" || pathname.startsWith("/api")) {
          return true;
        }
        return !!token;
      },
    },
  }
);
export const config = {
  matcher: ["/:path*"],
};
