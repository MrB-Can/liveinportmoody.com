import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicFilePattern = /\.(.*)$/;
const PREVIEW_COOKIE = "__lipm_preview";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const comingSoonEnabled = process.env.COMING_SOON_ENABLED !== "false";
  const previewKey = process.env.PREVIEW_KEY;

  // Handle /preview?key=... — set cookie and redirect to home
  if (pathname === "/preview") {
    const key = request.nextUrl.searchParams.get("key");
    if (previewKey && key === previewKey) {
      const res = NextResponse.redirect(new URL("/", request.url));
      res.cookies.set(PREVIEW_COOKIE, previewKey, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
      return res;
    }
  }

  if (!comingSoonEnabled) return NextResponse.next();

  // Allow through if the user has the preview cookie
  if (request.cookies.get(PREVIEW_COOKIE)?.value === previewKey) {
    return NextResponse.next();
  }

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
