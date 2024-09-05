"use client";

import { useCard } from "@/context/ButtonContext";

import BasketShoppingCard from "@/module/BasketShoppingCard";
import { sp } from "@/utils/replaceNumber";


function Shopping() {
  const [state, dispatch] = useCard();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <div>
      <div className="flex">
        <div className="flex items-start justify-between ">
          {state.selectedItems.map((product) => (
            <BasketShoppingCard
              key={product._id}
              data={product}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      </div>
      <button className="bg-y1 w-full text-black rounded-lg hover:bg-yellow-200  p-[10px] mb-[25px] ">
        <p className="text-black">{sp(state.total)}:تومان</p>
        پرداخت
      </button>
    </div>
  );
}

export default Shopping;
