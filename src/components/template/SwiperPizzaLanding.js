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

const SwiperpizzaLanding = () => {
  const images = [
    { src: "/image/pizza/pizzaswiper.jpg", name: "پیتزا امریکایی مخروط" },
    { src: "/image/pizza/pizzaswiper2.jpg", name: "پیتزا امریکایی سنت لوییس" },
    { src: "/image/pizza/pizzaswiper3.jpg", name: "پیتزا امریکایی دیترویت" },
    { src: "/image/pizza/pizzaswiper4.jpg", name: "پیتزا ایتالیایی مارگاریتا" },
    { src: "/image/pizza/pizzaswiper5.jpg", name: "پیتزا ایتالیایی سیسیلی" },
    { src: "/image/pizza/pizzaswiper6.jpg", name: "پیتزا ایتالیایی رمی" },

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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <p className="text-white text-[20px] sm:text-[25px] md:text-[30px]">
              {image.name}
            </p>
            <div className="w-full h-full relative rounded-lg">
              <Image
                className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                src={image.src}
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

export default SwiperpizzaLanding;
