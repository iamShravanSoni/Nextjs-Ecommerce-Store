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
      user = await User.create({ clerkId: userId });
      await user.save();
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error"}),
      { status: 500 }
    );
  }
};
