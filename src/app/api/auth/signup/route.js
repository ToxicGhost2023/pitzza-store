import UserLand from "@/models/UserLand";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/password";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 402 }
      );
    }

    const existingUser = await UserLand.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب وجود دارد" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await UserLand.create({
      email: email,
      password: hashedPassword,
    });

    if (newUser) {
      return NextResponse.json(
        { massege: "حساب کاربری ایجاد شد" },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    );
  }
}
