import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  let backgroundColor = "";

  switch (pathname) {
    case "/":
      backgroundColor = "#16bdd8";
      break;
    case "/about":
      backgroundColor = "#c85916";
      break;
    case "/products":
      backgroundColor = "#536129";
      break;
    default:
      backgroundColor = "";
      break;
  }

  requestHeaders.set("backgroundColor", backgroundColor);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
