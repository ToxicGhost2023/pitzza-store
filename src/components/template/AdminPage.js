"use client";

import InputAdmin from "@/module/InputAdmin";
import { useState } from "react";
import { motion } from "framer-motion";
import CategoryAdmin from "@/module/CategoryAdmin";
import UploadAdmin from "@/module/UploadAdmin";


function AdminPage() {
  const [menu, setMenu] = useState({
    title: "",
    recipe: "",
    category: "",
    price: "",
    image: [],
  });

  const submitHandler = async () => {
    const res = await fetch("/api/menu", {
      method: "POST",
      body: JSON.stringify(menu),
      headers: { "Content-Type": "application/json" },
    });
    if (res === "201") {
      setMenu("");
    }
    const data = await res.json();
   
  };
  const handleUploadSuccess = (name, url) => {
    setMenu((prevFiles) => ({ ...prevFiles, [name]: url }));
  };

  return (
    <div className=" border backdrop-blur m-[20px] border-y1 p-[50px]">
   
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-y1 justify-center text-center"
      >
        پنل ادمین
      </motion.h1>
      <div className=" text-y1">
        <InputAdmin
          title="نام آیتم"
          name="title"
          menu={menu}
          setMenu={setMenu}
        />
        <InputAdmin
          title="طرز تهیه"
          name="recipe"
          menu={menu}
          setMenu={setMenu}
          textarea={true}
        />
        <InputAdmin
          title="قیمت  مصرف کننده"
          name="price"
          menu={menu}
          setMenu={setMenu}
        />
        <CategoryAdmin menu={menu} setMenu={setMenu} name="category" />
        <UploadAdmin
          title="آپلود عکس"
          name="image"
          onUploadSuccess={handleUploadSuccess}
        />

        <button
          onClick={submitHandler}
          className="w-[100%] border border-dashed text-y1 border-y1 mt-[50px] rounded-lg pt-[10px] hover:bg-y1 hover:text-or1"
        >
          ثبت منو
        </button>
      </div>
    </div>
  );
}

export default AdminPage;
