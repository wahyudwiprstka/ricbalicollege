"use client";

import { useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const heroItems = [
  {
    name: "Hero 1",
    path: "/img/hero/hero1.png",
    heading: "WELCOME TO",
    highlight: "RISING INTERNATIONAL COLLEGE BALI",
    description:
      "Empowering future professionals with industry-ready global skills.",
  },
  {
    name: "Hero 2",
    path: "/img/hero/hero2.png",
    heading: "BUILD YOUR",
    highlight: "GLOBAL CAREER",
    description: "Join world-class vocational training in the heart of Bali.",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full relative overflow-hidden">
      {/* TEXT LAYER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center text-center px-6"
      >
        <div className="max-w-6xl space-y-6">
          <h1 className="font-light leading-tight text-white text-xl md:text-5xl tracking-wide drop-shadow-lg">
            {heroItems[activeIndex].heading}
            <br />
            <span className="font-black">
              {heroItems[activeIndex].highlight}
            </span>
          </h1>

          <span className="block mx-auto w-24 md:w-52 h-1 bg-linear-to-r from-white/10 via-white to-white/10" />

          <p className="text-white/90 text-base md:text-xl max-w-xl mx-auto leading-relaxed">
            {heroItems[activeIndex].description}
          </p>

          <button className="mt-4 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-[#5c1b15] transition">
            Explore Programs
          </button>
        </div>
      </motion.div>

      {/* SWIPER */}
      <Swiper
        loop
        effect="fade"
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectFade, Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative z-50 w-full h-full [.swiper-navigation-prev]:z-30!"
      >
        {heroItems.map((item) => (
          <SwiperSlide key={item.name}>
            <img
              src={item.path}
              alt={item.name}
              className="w-full h-[650px] object-cover"
            />
          </SwiperSlide>
        ))}
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-10  bg-black/50 pointer-events-none" />
      </Swiper>
    </section>
  );
};

export default Hero;
