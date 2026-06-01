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

// Paths that pass through regardless of coming-soon state.
function isAlwaysAllowed(pathname: string): boolean {
  return (
    pathname === "/coming-soon" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.startsWith("/api/") ||
    publicFilePattern.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const comingSoonEnabled = process.env.COMING_SOON_ENABLED !== "false";
  const previewKey = process.env.PREVIEW_KEY;

  // Always pass through regardless of gate state.
  if (isAlwaysAllowed(pathname)) return NextResponse.next();

  // Handle /preview?key=... — set cookie and redirect to home.
  if (previewKey && pathname === "/preview") {
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

  // Gate is disabled — let everything through.
  if (!comingSoonEnabled) return NextResponse.next();

  // Cookie holders have already unlocked — let them through.
  if (previewKey) {
    const cookieVal = request.cookies.get(PREVIEW_COOKIE)?.value ?? "";
    if (timingSafeEqual(cookieVal, previewKey)) return NextResponse.next();
  }

  // Everyone else → coming-soon.
  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
