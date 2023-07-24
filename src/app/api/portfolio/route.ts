import prismadb from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId } = auth();

    const body = await request.json();

    const { title, image, description } = body;

    if (!userId) {
      return new NextResponse("Unauthorized access", {
        status: 401,
      });
    }

    if (!title || !image) {
      return new NextResponse("title and Image are required", {
        status: 400,
      });
    }

    const portfolio = await prismadb.portfolio.create({
      data: {
        imageUrl: image,
        title,
        userId,
        description,
      },
    });

    return NextResponse.json(portfolio);
  } catch (error: any) {
    console.log("[CREATE_PORTFOLIO_ERROR]");
    console.log(error.message);

    return new NextResponse("internal server error!", {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const portfolio = await prismadb.portfolio.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    console.log(portfolio);

    return NextResponse.json(portfolio);
  } catch (error: any) {
    console.log("[GET_PORTFOLIO_ERROR]");
    console.log(error.message);

    return new NextResponse("internal server error!", {
      status: 500,
    });
  }
}
