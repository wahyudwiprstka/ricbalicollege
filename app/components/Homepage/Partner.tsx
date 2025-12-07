"use client";
import { delay, motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Partner = () => {
  const t = useTranslations("Homepage");
  const messages = useMessages();
  const partners = [
    {
      name: "White Lodging",
      img: "/img/partners/white-lodging.png",
    },
    {
      name: "Xanterra",
      img: "/img/partners/xanterra.png",
    },
    {
      name: "JW Marriott",
      img: "/img/partners/jw-marriott.png",
    },
    {
      name: "Davidson Hospitality Group",
      img: "/img/partners/davidson.png",
    },
    {
      name: "Omni Hotels",
      img: "/img/partners/omni-hotels.png",
    },
    {
      name: "Marriott",
      img: "/img/partners/marriott.png",
    },
    {
      name: "The Ritz Carlton",
      img: "/img/partners/the-ritz-carlton.png",
    },
    {
      name: "Hyatt",
      img: "/img/partners/hyatt.png",
    },
    {
      name: "Beachside Hospitality Group",
      img: "/img/partners/beachside-hospitality-group.png",
    },
    {
      name: "The Oasis At Death Valley",
      img: "/img/partners/the-oasis.png",
    },
    {
      name: "The Grand Hotel",
      img: "/img/partners/the-grand-hotel.png",
    },
    {
      name: "Rocky Mountain National Park",
      img: "/img/partners/rocky-mountain.png",
    },
    {
      name: "Polo Club Boca Raton",
      img: "/img/partners/polo-club.png",
    },
    {
      name: "Cheeca Lodge & Spa",
      img: "/img/partners/cheeca.png",
    },
    {
      name: "Three Waters Resort & Marina",
      img: "/img/partners/three-waters-resort-marina.png",
    },
    {
      name: "The Biltmore",
      img: "/img/partners/the-biltmore.png",
    },
    {
      name: "State Plaza Hotel",
      img: "/img/partners/state-plaza-hotel.png",
    },
    {
      name: "Westin Hotels & Resort",
      img: "/img/partners/westin.png",
    },
    {
      name: "Kimpton Santo",
      img: "/img/partners/kimpton-santo.png",
    },
    {
      name: "Margaritaville",
      img: "/img/partners/margaritaville.png",
    },
    {
      name: "Northern Hospitality Group",
      img: "/img/partners/northern-hospitality-group.png",
    },
    {
      name: "Asher Adams",
      img: "/img/partners/asher-adams.png",
    },
    {
      name: "Wintergreen Resort",
      img: "/img/partners/wintergreen.png",
    },
    {
      name: "Hilton Garden Inn",
      img: "/img/partners/hilton-garden-inn.png",
    },
    {
      name: "Sheraton",
      img: "/img/partners/sheraton.png",
    },
    {
      name: "Silver Bay YMCA",
      img: "/img/partners/silver-bay.png",
    },
    {
      name: "Wyndham Grand",
      img: "/img/partners/wyndham-grand.png",
    },
    {
      name: "Hotel Saranac",
      img: "/img/partners/hotel-saranac.png",
    },
    {
      name: "Teratron",
      img: "/img/partners/terratron.png",
    },
    {
      name: "Brush Creek",
      img: "/img/partners/brush-creek.png",
    },
    {
      name: "Le Meridien",
      img: "/img/partners/le-meridien.png",
    },
    {
      name: "Cliff House Maine",
      img: "/img/partners/cliff-house.png",
    },
    {
      name: "Radisson",
      img: "/img/partners/radisson.png",
    },
    {
      name: "Hotel Viking",
      img: "/img/partners/hotel-viking.png",
    },
  ];
  return (
    <section className="py-16 bg-slate-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col text-center px-10 items-center justify-center gap-8 mx-auto"
      >
        <div className="max-w-5xl">
          <h2 className="font-black text-4xl mb-4 text-primary uppercase">
            {t("partner_title")}
          </h2>
        </div>
        <div className="w-full px-12">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((item, index) => (
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
                key={item.name + index}
                src={item.img}
                alt={item.name}
                className="md:h-20 h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Partner;
