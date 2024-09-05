"use client";

import DrawerHeader from "@/module/DrawerHeader";
import { MdLogin } from "react-icons/md";

import { IoHome } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { RiAdminFill } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import { MdOutlineMenuBook } from "react-icons/md";

import Link from "next/link";
import ShowCounter from "@/module/ShowCounter";
function Header() {
  return (
    <header className="bg-y1 flex flex-wrap flex-row  items-center p-2 rounded-2xl">
      <main className="flex flex-col sm:flex-row items-center w-full justify-between gap-y-4 sm:gap-y-0">
        <aside className="w-full sm:w-auto mb-4 sm:mb-0">
          <DrawerHeader />
        </aside>
        <nav className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-x-10">
          <Link href="/signin" className="flex items-center">
            <span className="text-sm sm:text-base md:text-lg">ورود</span>
            <MdLogin className="ml-1" />
          </Link>
          <Link href="/signup" className="flex items-center">
            <span className="text-sm sm:text-base md:text-lg">ثبت نام</span>
            <LuPencilLine className="ml-1" />
          </Link>
          <Link href="/admin" className="flex items-center">
            <RiAdminFill className="text-lg sm:text-xl md:text-2xl" />
          </Link>

          <Link href="/menu" className="flex items-center">
            <MdOutlineMenuBook className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base md:text-lg">منو</span>
          </Link>
        </nav>
        <nav className="flex  gap-10  justify-center sm:justify-end w-full sm:w-auto">
          <section className="mr-[2rem]">
            <Link
              href="/shopping"
              className="flex items-center mr-[20px] relative"
            >
              <SlBasket className="text-2xl sm:text-3xl py-1" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full  flex items-center justify-center">
                <ShowCounter />
              </div>
            </Link>
          </section>

          <section className="ml-[2rem]">
            <Link href="/">
              <IoHome className="text-lg sm:text-xl md:text-2xl" />
            </Link>
          </section>
        </nav>
      </main>
    </header>
  );
}

export default Header;
