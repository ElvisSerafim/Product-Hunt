import { PRODUCT_HUNT_ACCESS_TOKEN_COOKIE } from "@/utils/constants";
import { ResponseAuth } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(
      `${process.env.PRODUCT_HUNT_BASE_URL}/v2/oauth/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Host: "api.producthunt.com",
        },
        body: JSON.stringify({
          grant_type: process.env.PRODUCT_HUNT_GRANT_TYPE,
          client_id: process.env.PRODUCT_HUNT_ACCESS_ID,
          client_secret: process.env.PRODUCT_HUNT_CLIENT_SECRET,
        }),
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch token from Product Hunt" },
        { status: res.status }
      );
    }

    const data: ResponseAuth = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error while obtaining token" },
      { status: 500 }
    );
  }
}
