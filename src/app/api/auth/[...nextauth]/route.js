import UserLand from "@/models/UserLand";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/password";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authoptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }
        if (!email || !password)
          throw new Error("لطفا اطلاعات خود را وارد کنید");

        const userLand = await UserLand.findOne({ email });
        if (!userLand) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(password, userLand.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authoptions);
export { handler as POST, handler as GET };
