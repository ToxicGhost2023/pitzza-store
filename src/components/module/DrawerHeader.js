"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { SlBasket } from "react-icons/sl";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { RiAdminFill } from "react-icons/ri";
import { BsMenuButton } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { MdLogin } from "react-icons/md";
import { IoHome } from "react-icons/io5";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";

export default function DrawerHeader() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const menuItems = [
    {
      text: "پنل ادمین",
      href: "/admin",
      icon: <RiAdminFill className="text-[30px]" />,
    },
    {
      text: "ثبت نام",
      href: "/signup",
      icon: <LuPencilLine className="text-[30px]" />,
    },
    {
      text: "ورود",
      href: "/signin",
      icon: <MdLogin className="text-[30px]" />,
    },
    {
      text: "منو",
      href: "/menu",
      icon: <BsMenuButton className="text-[30px]" />,
    },
    {
      text: "سبد خرید",
      href: "/shopping",
      icon: <SlBasket className="text-[30px]" />,
    },
    {
      text: " صفحه اصلی",
      href: "/",
      icon: <IoHome className="text-[30px]" />,
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="bg-y1 "
      sx={{ width: anchor === "rigth" || anchor === "left" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="bg-y1 h-fit">
        {menuItems.map((item, index) => (
          <div key={index} className="flex p-[10px] justify-between space-x-8">
            <ListItem key={item.text} disablePadding>
              <Link href={item.href}>
                <ListItemButton>
                  <ListItemIcon className="pr-[10px]">{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    className="hover:text-or1"
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="text-y1 ">
      {["right"].map((anchor) => (
        <div key={anchor} className="h-fit">
          <Button
            onClick={toggleDrawer(anchor, true)}
            className="text-b1 text-[17px]  hover:text-or1"
          >
            <RxHamburgerMenu />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
}
