import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDb";
import { auth } from "@clerk/nextjs/server";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    await connectToDB();

    let user = await User.findOne({ clerkId: userId });

    // When the user sign-in for the first time, create a new user for them
    if (!user) {
      try {
        user = await User.create({ clerkId: userId });
        await user.save();
      } catch (error) {
        if (error.code === 11000) {
          return new NextResponse(
            JSON.stringify({ message: "User already exists" }),
            { status: 409 }
          );
        }
        throw error;
      }
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.error("[users_GET]", err);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error"}),
      { status: 500 }
    );
  }
};
