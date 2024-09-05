"use client";

import { TbShoppingBagPlus } from "react-icons/tb";

import { IoTrashOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

import { productQuantity } from "@/utils/shoppingfunc";

import StarRating from "./StarRatingCard";
import Image from "next/image";

import ButtonLinkMenu from "./ButtonLinkMenu";
import { useCard } from "@/context/ButtonContext";
import { sp } from "@/utils/replaceNumber";

function CardMenu({ data }) {
  const { _id, title, image, recipe, price } = data;
  const [state, dispatch] = useCard();

  const quantity = productQuantity(state, _id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <main className="border border-y1 backdrop-blur-lg w-fit h-fit p-[5px] m-[10px] rounded-2xl ">
      <p className="text-y1 text-center ">{title}</p>
      <figure>
        {image && (
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="w-[200px] h-[200px] rounded-xl"
          />
        )}
      </figure>
      <figcaption className=" overflow-hidden  whitespace-nowrap text-ellipsis text-y1 w-[200px]">
        {recipe}
      </figcaption>
      <p className=" text-y1">
        قیمت:{" "}
        <span className="text-white font-semibold hover:text-black ">
         
          {sp(price)}
        </span>
        تومان
      </p>
      <div>
        <StarRating />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="rounded-3xl">
          {quantity === 0 ? (
            <button
              className="bg-y1 p-[5px] w-fit h-fit rounded-3xl"
              onClick={() => clickHandler("ADD_ITEM")}
            >
              <TbShoppingBagPlus />
            </button>
          ) : (
            <button
              className="bg-y1 p-[5px] w-fit h-fit rounded-3xl"
              onClick={() => clickHandler("INCREASE")}
            >
              <GoPlus />
            </button>
          )}
          <span className="text-white mx-[10px] ">
            {quantity === 0 ? null : quantity}
          </span>
          {quantity === 1 && (
            <button
              className="bg-y1 p-[5px] w-fit h-fit rounded-3xl"
              onClick={() => clickHandler("REMOVE_ITEM")}
            >
              <IoTrashOutline />
            </button>
          )}
          {quantity > 1 && (
            <button
              className="bg-y1 p-[5px] w-fit h-fit rounded-3xl"
              onClick={() => clickHandler("DECREASE")}
            >
              <FiMinus />
            </button>
          )}
        </div>
        <div>
          <ButtonLinkMenu data={JSON.parse(JSON.stringify(data))} />
        </div>
      </div>
    </main>
  );
}

export default CardMenu;
