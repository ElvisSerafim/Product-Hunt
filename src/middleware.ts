import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PRODUCT_HUNT_ACCESS_TOKEN_COOKIE } from "@/utils/constants";
import { cookies } from "next/headers";
import { ResponseAuth } from "./utils/types";

export async function middleware(req: NextRequest) {
  try {
    const token = req.cookies.get(PRODUCT_HUNT_ACCESS_TOKEN_COOKIE)?.value;
    if (!token) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth`
      );
      const data: ResponseAuth = await response.json();

      if (data.access_token) {
        const cookieStore = await cookies();
        cookieStore.set(PRODUCT_HUNT_ACCESS_TOKEN_COOKIE, data.access_token, {
          maxAge: 60 * 60,
        });
      }
    }
  } catch (error) {
    console.log("Error fetching token from Product Hunt");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|auth|_next/static|_next/image|favicon.ico).*)"],
};
