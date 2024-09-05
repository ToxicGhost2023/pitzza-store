"use client";

import { useCard } from "@/context/ButtonContext";
import React from "react";

function ShowCounter() {
  const [state] = useCard();
  return (
    <div className="w-fiit">
      {!!state.itemsCounter && (
        <span className=" bg-or1 absolute top-[12px] right-0 translate-x-[50%] -translate-y-[50%] text-white text-xs w-[20px] h-[20px] flex items-center justify-center rounded-full">
          {state.itemsCounter}
        </span>
      )}
    </div>
  );
}

export default ShowCounter;
