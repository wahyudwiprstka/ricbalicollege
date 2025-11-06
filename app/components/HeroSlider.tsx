"use client";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    {
      image: "/img/hero.webp",
      title: "Selamat Datang di RIC College",
      subtitle: "Membangun Generasi Cerdas dan Berkarakter",
    },
    {
      image: "/img/hero.webp",
      title: "Kampus Inovatif dan Profesional",
      subtitle: "Mendukung Potensi Mahasiswa Menuju Masa Depan",
    },
    {
      image: "/img/hero.webp",
      title: "Pendidikan Berbasis Teknologi",
      subtitle: "Mempersiapkan Lulusan Siap Kerja dan Siap Usaha",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className=""
      >
        <div className="custom-prev">
          <ChevronLeft />
        </div>
        <div className="custom-next">
          <ChevronRight />
        </div>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              width={1000}
              height={1000}
              alt={`Hero ${index}`}
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>
        {`
          .custom-prev,
          .custom-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            color: var(--color-primary);
            padding: 10px;
            border-radius: 9999px;
            cursor: pointer;
          }

          .custom-prev {
            left: 2%;
          }

          .custom-next {
            right: 2%;
          }

          .custom-prev:hover,
          .custom-next:hover {
            background-color: #7b1113;
            color: white;
            transition: all 0.3s ease;
          }
        `}
      </style>
    </section>
  );
}
