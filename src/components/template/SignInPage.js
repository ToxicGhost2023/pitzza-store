"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/module/Loader";
import Link from "next/link";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <article className="sm:mx-auto sm:w-full sm:max-w-sm">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-y1 backdrop-blur text-[20px] rounded-2xl  text-center text-bold leading-9 tracking-tight"
        >
          ورود به حساب کاربری
        </motion.h1>
      </article>

      <section className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-y1 backdrop-blur  rounded-lg p-3">
        <form>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-y1"
            >
              ایمیل:
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                value={email}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-y1"
              >
                رمز:
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                value={password}
                type="password"
                autoComplete="current-password"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            {loading ? (
              <Loader />
            ) : (
              <button
                onClick={signinHandler}
                type="submit"
                className="flex  w-full justify-center bg-y1 p-1 mt-[30px] rounded-lg text-lg hover:transition-all animate-pulse ring hover:ring-offset-2 hover:animate-none"
              >
                ورود
              </button>
            )}
          </div>
          <div className="text-sm text-center mt-[30px] ">
            <Link
              href="/signup"
              className="font-semibold text-y1 hover:text-indigo-500"
            >
              ثبت نام نکرده اید؟
            </Link>
          </div>
          <Toaster />
        </form>
      </section>
    </main>
  );
}

export default SignInPage;
