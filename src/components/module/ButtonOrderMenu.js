"use client";

import { useCard } from "@/context/ButtonContext";
import { productQuantity } from "@/utils/shoppingfunc";

import { TbShoppingBagPlus } from "react-icons/tb";

import { IoTrashOutline } from "react-icons/io5";
import { useMenu } from "@/context/MenuContext";

function ButtonOrderMenu() {
  const data=useMenu()


  const { _id } = data;

  const [state, dispatch] = useCard();

  console.log(state);

  const quantity = productQuantity(state, _id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className="bg-r1 text-center text-[20px] text-white p-[5px] rounded-xl hover:text-black ml-[5px] w-[50px]">
      {quantity === 1 && (
        <button
          onClick={() => clickHandler("REMOVE_ITEM")}
          className="bg-r1 text-white p-[5px] rounded-xl hover:text-black"
        >
          <IoTrashOutline />
        </button>
      )}

      {quantity > 1 && (
        <button
          className="bg-r1 text-white p-[5px] rounded-xl hover:text-black"
          onClick={() => clickHandler("DECREASE")}
        >
          -
        </button>
      )}
      <span className="text-white">{quantity === 0 ? null : quantity}</span>
      {quantity === 0 ? (
        <button
          className="bg-r1 text-white p-[5px] rounded-xl hover:text-black"
          onClick={() => clickHandler("ADD_ITEM")}
        >
          <TbShoppingBagPlus />
        </button>
      ) : (
        <button
          className="bg-r1 text-white p-[5px] rounded-xl hover:text-black"
          onClick={() => clickHandler("INCREASE")}
        >
          +
        </button>
      )}
    </div>
  );
}

export default ButtonOrderMenu;
