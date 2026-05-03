import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function GallerySection() {
  const { t } = useTranslation();

  const data = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: t("gallery.items.item1.title"),
      desc: t("gallery.items.item1.desc"),
    },
    {
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: t("gallery.items.item2.title"),
      desc: t("gallery.items.item2.desc"),
    },
    {
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      title: t("gallery.items.item3.title"),
      desc: t("gallery.items.item3.desc"),
    },
    {
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: t("gallery.items.item4.title"),
      desc: t("gallery.items.item4.desc"),
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-10 md:py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto space-y-8">

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {t("gallery.title1")}{" "}
          <span className="text-[#E59B52]">
            {t("gallery.title2")}
          </span>
        </h2>

        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 3000,
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
          className="!pb-10"
        >
          {data.map((item, i) => (
            <SwiperSlide
              key={i}
              className="w-[280px] sm:w-[350px] md:w-[500px]"
            >
              <div className="relative group">
                <img
                  src={`${item.img}?auto=format&fit=crop&w=1200&q=80`}
                  className="w-full h-[250px] sm:h-[320px] md:h-[420px] object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-3 shadow-lg">
                  <p className="font-semibold text-sm md:text-base">
                    {item.title}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
