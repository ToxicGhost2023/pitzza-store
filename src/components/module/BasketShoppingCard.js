"use client";

import { IoTrashOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Image from "next/image";
import { sp } from "@/utils/replaceNumber";


function BasketShoppingCard({ data, clickHandler }) {
  const { title, image, price, quantity } = data;

  
  return (
    <div className="  border border-y1 backdrop-blur-lg w-fit h-fit p-[5px] m-[10px] rounded-2xl">
      <p className="text-y1 text-[20px]">{title}</p>
      <div className="my-[10px]">
        {image && (
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="w-[200px] h-[200px] rounded-xl"
          />
        )}
      </div>
      <p className="text-y1">{sp(price)}</p>
      <div className="flex flex-wrap justify-between">
        <div className="rounded-3xl">
          {quantity === 1 && (
            <button
              className="bg-y1 p-[5px] w-fit h-fit rounded-3xl"
              onClick={() => clickHandler("REMOVE_ITEM", data)}
            >
              <IoTrashOutline />
            </button>
          )}
          {quantity > 1 && (
            <button
              className="bg-y1 p-[5px] w-fit h-fit rounded-3xl"
              onClick={() => clickHandler("DECREASE", data)}
            >
              <FiMinus />
            </button>
          )}
          <span className="text-white mx-[10px] ">
            {quantity === 0 ? null : quantity}
          </span>
          <button
            className="bg-y1 p-[5px] w-fit h-fit rounded-3xl"
            onClick={() => clickHandler("INCREASE", data)}
          >
            <GoPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketShoppingCard;
