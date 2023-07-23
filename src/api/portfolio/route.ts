import prismadb from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId } = auth();

    const body = await request.json();

    const { title, imageUrl } = body;

    if (!userId) {
      return new NextResponse("Unauthorized access", {
        status: 401,
      });
    }

    if (!title || !imageUrl) {
      return new NextResponse("title and Image are required", {
        status: 400,
      });
    }

    const portfolio = await prismadb.portfolio.create({
      data: {
        imageUrl,
        title,
        username: "",
      },
    });

    return NextResponse.json(portfolio);
  } catch (error) {
    console.log("[CREATE__PORTFOLIO ERROR]");
    return new NextResponse("internal server error!", {
      status: 500,
    });
  }
}
