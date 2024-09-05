//  ترکیب کردیم   useReducer ساختیم و اونو رو با  contex  در این کامپوننت ما یک
// شود wrap پاس دادیم که با کانتکس به کل برنامه    value={{ state, dispatch }}  هوک ردیوسر  props  ما هست در واقع  context  که ButtonProvider به

"use client";

import { sumProducts } from "@/utils/shoppingfunc";
import { createContext, useContext, useReducer } from "react";

const ButtonContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.selectedItems.find((item) => item._id === action.payload._id)
      ) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        checkout: false,
        ...sumProducts(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item._id !== action.payload._id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };

    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item._id === action.payload._id
      );
      const updatedItems = [...state.selectedItems];
      const updatedItem = {
        ...updatedItems[increaseIndex],
        quantity: updatedItems[increaseIndex].quantity + 1,
      };
      updatedItems[increaseIndex] = updatedItem;
      // state.selectedItems[increaseIndex].quantity++;
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumProducts(state.selectedItems),
      };
    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item._id === action.payload._id
      );

      state.selectedItems[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    default:
      throw new Error("invalid action");
  }
};

function ButtonProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ButtonContext.Provider value={{ state, dispatch }}>
      {children}
    </ButtonContext.Provider>
  );
}
const useCard = () => {
  const { state, dispatch } = useContext(ButtonContext);
  return [state, dispatch];
};
export default ButtonProvider;
export { useCard };
