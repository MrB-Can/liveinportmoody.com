import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicFilePattern = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const comingSoonEnabled = process.env.COMING_SOON_ENABLED !== "false";

  if (!comingSoonEnabled) return NextResponse.next();
  if (
    pathname === "/coming-soon" ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    publicFilePattern.test(pathname)
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
