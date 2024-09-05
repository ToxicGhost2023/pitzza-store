"use client";

import { useState } from "react";

import CardMenu from "@/module/CardMenu";

function MenuPaublibkPage({ menu }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryHandler = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenu = menu.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  return (
    <div>
      <div className="flex flex-row  flex-wrap w-full sm:justify-evenly gap-1 my-[50px]">
        <span className=" text-y1 text-lg sm:text-xl mb-2">دسته بندی:</span>
        <button
          onClick={() => categoryHandler("american")}
          className=" bg-y1 text-black w-full sm:w-[150px] rounded-2xl p-2 sm:p-3 hover:bg-white hover:text-black "
        >
          پیتزا آمریکایی
        </button>
        <button
          onClick={() => categoryHandler("italiy")}
          className=" bg-y1 text-black w-full sm:w-[150px] rounded-2xl p-2 sm:p-3 hover:bg-white hover:text-black"
        >
          پیتزا ایتالیایی
        </button>
        <button
          onClick={() => categoryHandler("drink")}
          className=" bg-y1 text-black w-full sm:w-[150px] rounded-2xl p-2 sm:p-3 hover:bg-white hover:text-black "
        >
          نوشیدنی
        </button>
        <button
          onClick={() => categoryHandler("food")}
          className=" bg-y1 text-black w-full sm:w-[150px] rounded-2xl p-2 sm:p-3 hover:bg-white hover:text-black "
        >
          پیش غذا
        </button>
        <button
          onClick={() => categoryHandler("all")}
          className="bg-y1 text-black w-full sm:w-[150px] rounded-2xl p-2 sm:p-3 hover:bg-white hover:text-black "
        >
          همه
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-1  backdrop-blur-3xl rounded-sm">
        {filteredMenu.length ? null : <p>لطفا صبر کنید</p>}
        {filteredMenu.map((i) => (
          <CardMenu key={i._id} data={i} />
        ))}
      </div>
    </div>
  );
}

export default MenuPaublibkPage;
