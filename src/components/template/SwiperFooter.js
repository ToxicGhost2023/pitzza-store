"use client";
// ImageSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

// Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const SiwperFooter = () => {
  const footerimages = [
    { src: "/image/footerimage/drink.jpg", name: "نوشیدنی ها" },
    { src: "/image/footerimage/food.jpg", name: "غذا ها" },
    { src: "/image/footerimage/pizza.jpg", name: "پیتزاها" },

    // Add more pizzas here
  ];

  return (
    <div style={{ width: "50%", height: "250px", position: "relative" }}>
      <Swiper
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      >
        {footerimages.map((footerimage, index) => (
          <SwiperSlide key={index}>
            <p className="text-white text-[30px]">{footerimage.name}</p>
            <div className="w-[100%] h-[100%] relative rounded-lg">
              <Image
                className="rounded-lg w-[600px] h-[200px]"
                src={footerimage.src}
                alt={`Slide ${index + 1}`}
                width={300}
                height={300}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SiwperFooter;
