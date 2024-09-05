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

const SwiperFoodLamding = () => {
  const foods = [
    { src: "/image/food/food.jpg", name: "پاستا" },
    { src: "/image/food/food2.jpg", name: "پاستا سبزیجات" },
    { src: "/image/food/food3.jpg", name: "پاستا  با سس گوشت" },
    { src: "/image/food/food4.jpg", name: "برگر" },
    { src: "/image/food/food5.jpg", name: "بشقاب سبزیجات" },
    { src: "/image/food/food6.jpg", name: "استیک" },

    // Add more images here
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
        {foods.map((food, index) => (
          <SwiperSlide key={index}>
            <p className="text-white text-[20px] sm:text-[25px] md:text-[30px]">
              {food.name}
            </p>
            <div className="w-full h-full relative rounded-lg">
              <Image
                className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                src={food.src}
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

export default SwiperFoodLamding;
