"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Loader from "@/module/Loader";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز شما صحیح نمیباشد!");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    const data = await res.json();
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
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
          ثبت نام
        </motion.h1>
      </article>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-y1 backdrop-blur  rounded-lg p-3">
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
              <label className="block text-sm font-medium leading-6 text-y1">
                تکرار رمز عبور:
              </label>
              <input
                type="Password"
                id="password"
                name="password"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}"
                required
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            {loading ? (
              <Loader />
            ) : (
              <button
                onClick={signupHandler}
                type="submit"
                className="flex  w-full justify-center bg-y1 p-1 mt-[30px] rounded-lg text-lg hover:transition-all animate-pulse ring hover:ring-offset-2 hover:animate-none"
              >
                ثبت نام
              </button>
            )}
          </div>
          <div className="text-sm text-center mt-[30px] ">
            <Link
              href="/signin"
              className="font-semibold text-y1 hover:text-indigo-500"
            >
              حساب کاربری دارید؟
            </Link>
          </div>
          <Toaster />
        </form>
      </div>
    </main>
  );
}

export default SignUpPage;
