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

const SwiperDrinkLanding = () => {
  const drinks = [
    { src: "/image/drink/drink.jpg", name: "اسموتی انبه پرتغال" },
    { src: "/image/drink/drink2.jpg", name: " اسموتی توت فرنگی" },
    { src: "/image/drink/drink3.jpg", name: "هفت میوه " },
    { src: "/image/drink/drink4.jpg", name: " کهکشانی " },
    { src: "/image/drink/drink5.jpg", name: " موهیتو دارک  " },
    { src: "/image/drink/drink6.jpg", name: "آیس تی " },
    // Add more pizzas here
  ];

  return (
    <header className="w-full sm:w-3/4 md:w-1/2 h-[250px] relative">
      <Swiper
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      >
        {drinks.map((drink, index) => (
          <SwiperSlide key={index}>
            <p className="text-white text-[20px] sm:text-[25px] md:text-[30px]">
              {drink.name}
            </p>
            <div className="w-full h-full relative rounded-lg">
              <Image
                className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                src={drink.src}
                alt={`Slide ${index + 1}`}
                width={600}
                height={250}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default SwiperDrinkLanding;
