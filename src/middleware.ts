import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicFilePattern = /\.(.*)$/;
const PREVIEW_COOKIE = "__lipm_preview";

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const comingSoonEnabled = process.env.COMING_SOON_ENABLED !== "false";
  const previewKey = process.env.PREVIEW_KEY;

  if (!previewKey) {
    // No preview key configured — enforce coming-soon but allow no preview access
    if (!comingSoonEnabled) return NextResponse.next();
    if (
      pathname === "/coming-soon" ||
      pathname.startsWith("/api/") ||
      pathname.startsWith("/_next/") ||
      pathname === "/robots.txt" ||
      pathname === "/sitemap.xml" ||
      publicFilePattern.test(pathname)
    ) return NextResponse.next();
    const url = request.nextUrl.clone();
    url.pathname = "/coming-soon";
    url.search = "";
    return NextResponse.rewrite(url);
  }

  // Handle /preview?key=... — set cookie and redirect to home
  if (pathname === "/preview") {
    const key = request.nextUrl.searchParams.get("key") ?? "";
    if (timingSafeEqual(key, previewKey)) {
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
  const cookieVal = request.cookies.get(PREVIEW_COOKIE)?.value ?? "";
  if (timingSafeEqual(cookieVal, previewKey)) {
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
