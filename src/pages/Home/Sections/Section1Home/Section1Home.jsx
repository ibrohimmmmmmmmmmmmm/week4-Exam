import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaVk,
} from "react-icons/fa";

import img from "../Section1Home/Rectangle 72.png";

export default function Section1Home() {
  const { t } = useTranslation();

  const stats = t("home.section1.stats", { returnObjects: true });

  return (
    <section className="bg-[#EDEDED] py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-12">
        {stats.map((item, i) => (
          <div key={i}>
            <h2 className="text-3xl md:text-[48px] text-[#EFA35A] font-bold">
              {item.num}
            </h2>
            <p className="text-xs md:text-sm text-gray-700 mt-2 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h3 className="text-[#EFA35A] uppercase font-semibold mb-4">
            {t("home.section1.about.title")}
          </h3>

          <p className="text-gray-700 mb-4">
            {t("home.section1.about.p1")}{" "}
            <span className="text-[#EFA35A]">Win Dom</span>{" "}
            {t("home.section1.about.p1_2")}
          </p>

          <p className="text-gray-700 mb-4">
            {t("home.section1.about.p2")}
          </p>

          <p className="text-gray-700">
            {t("home.section1.about.p3")}
          </p>

          <div className="flex gap-3 mt-6">
            {[FaYoutube, FaInstagram, FaLinkedin, FaVk].map((Icon, i) => (
              <div
                key={i}
                className="p-2 border border-gray-400 hover:border-[#EFA35A] hover:text-[#EFA35A] transition cursor-pointer"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="w-full h-[250px] md:h-[350px] object-cover rounded-md shadow-lg"
        />
      </div>

      {/* ARCHITECTURE */}
      <div className="max-w-[1200px] mx-auto mb-16">
        <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
          {t("home.section1.arch.title1")}{" "}
          <span className="text-[#EFA35A]">
            {t("home.section1.arch.title2")}
          </span>
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705"
            className="h-[200px] md:h-[300px] w-full object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            className="h-[200px] md:h-[300px] w-full object-cover rounded-md"
          />
        </div>

        <p className="text-center text-gray-600 max-w-[700px] mx-auto">
          {t("home.section1.arch.desc1")}{" "}
          <span className="text-[#EFA35A]">
            {t("home.section1.arch.desc2")}
          </span>
          , {t("home.section1.arch.desc3")}
        </p>
      </div>

      {/* SWIPER */}
      <div className="max-w-[1200px] mx-auto">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={1.3}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80",
            img,
          ].map((image, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <img
                  src={image}
                  className="h-[220px] md:h-[320px] w-full object-cover rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
