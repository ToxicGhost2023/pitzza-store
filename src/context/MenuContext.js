"use client";

import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/menu");
        const data = await res.json();

        setMenu(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
};

const useMenu = () => {
  const menus = useContext(MenuContext);
  return menus;
};

export default MenuProvider;
export { useMenu };
