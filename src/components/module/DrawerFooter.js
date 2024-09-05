"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoIosArrowDropup } from "react-icons/io";

import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function DrawerFooter() {
  const menuItems = [
    {
      href: "https://www.instagram.com",
      icon: <FaInstagram className="text-[30px]" />,
    },
    {
      href: "https://web.telegram.org",
      icon: <BsTelegram className="text-[30px]" />,
    },
    {
      href: "https://web.whatsapp.com",
      icon: <FaSquareWhatsapp className="text-[30px]" />,
    },
    {
      href: "https://github.com/ToxicGhost2023",
      icon: <FaGithub className="text-[30px]" />,
    },
  ];

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List dir="rtl" className="bg-y1 flex flex-row  ">
        {menuItems.map((item, index) => (
          <div key={index} className=" p-[10px] justify-between space-x-8">
            <ListItem key={item.text} disablePadding>
              <Link href={item.href} className=" rounded-full ">
                <ListItemButton>
                  <ListItemIcon className="pr-[10px] rounded-full  hover:bg-blue-500 hover:text-white ">
                    {item.icon}
                  </ListItemIcon>
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
      <List className="m-[20px]">
        <div>
          <details open className="group">
            <summary className="cursor-pointer text-lg font-bold text-gray-700 group-hover:text-blue-500">
              درباره ما
            </summary>
            <p className="hidden group-hover:block text-gray-600 mt-2">
              پیتزا لند اولین رستوران فست فودی در این حوالی میباشد که قادر است
              پیتزا هارو در کمتر از 25دقیقه برای شمامشتریان عزیز اماده مند
            </p>
          </details>

          <details open className="group mt-4">
            <summary className="cursor-pointer text-lg font-bold text-gray-700 group-hover:text-blue-500">
              تماس با ما
            </summary>
            <p className="hidden group-hover:block text-gray-600 mt-2">
              شماره موبایل:0918444444 شماره تلفن:038244511
            </p>
          </details>

          <details open className="group mt-4">
            <summary className="cursor-pointer text-lg font-bold text-gray-700 group-hover:text-blue-500">
              لوکیشن ها:
            </summary>
            <p className="hidden group-hover:block text-gray-600 mt-2">
              تهران-سعادت‌آباد-کوچه دوم کنار کوچه سوم-درب زرد رنگ
            </p>
          </details>
        </div>
      </List>

      <Divider />
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className="text-b1 text-[50px] hover:bg-y1 bg-y1 rounded-[80%] -translate-y-6"
          >
            <IoIosArrowDropup />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
