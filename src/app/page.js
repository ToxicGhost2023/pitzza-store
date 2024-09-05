import MotionLandingPage from "@/module/MotionLandingPage";

import SwiperDrinkLanding from "@/template/SwiperDrinkLanding";
import SwiperFoodLamding from "@/template/SwiperFoodLanding";
import SwiperpizzaLanding from "@/template/SwiperPizzaLanding";

export default function Home() {
  return (
    <>
      <header>
        <MotionLandingPage />

        <section className="flex flex-col sm:flex-row text-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 backdrop-blur-sm">
          <SwiperpizzaLanding />
        </section>

        <section className="flex flex-col sm:flex-row text-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 backdrop-blur-sm mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
          <SwiperDrinkLanding />
        </section>

        <section className="flex flex-col sm:flex-row text-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 backdrop-blur-sm mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
          <SwiperFoodLamding />
        </section>
      </header>
    </>
  );
}
