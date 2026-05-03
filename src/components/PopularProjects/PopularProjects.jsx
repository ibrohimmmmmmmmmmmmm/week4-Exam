import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";

export default function PopularProjects() {
  const { t } = useTranslation();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const leftCard = {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: t("popular.left.title"),
    desc: t("popular.left.desc"),
  };

  const data = [
    {
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: t("popular.cards.0.title"),
      desc: t("popular.cards.0.desc"),
    },
    {
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      title: t("popular.cards.1.title"),
      desc: t("popular.cards.1.desc"),
    },
    {
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: t("popular.cards.2.title"),
      desc: t("popular.cards.2.desc"),
    },
    {
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: t("popular.cards.3.title"),
      desc: t("popular.cards.3.desc"),
    },
    {
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      title: t("popular.cards.4.title"),
      desc: t("popular.cards.4.desc"),
    },
    {
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: t("popular.cards.5.title"),
      desc: t("popular.cards.5.desc"),
    }
  ];

  return (
    <section className="bg-[#f5f5f5] py-10 md:py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="text-[#E59B52]">{t("popular.title1")}</span> {t("popular.title2")}
          </h2>

          <div className="flex gap-3">
            <button ref={prevRef} className="w-10 h-10 border rounded-full flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>
            <button ref={nextRef} className="w-10 h-10 border rounded-full flex items-center justify-center">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <img
              src={`${leftCard.img}?auto=format&fit=crop&w=800`}
              className="w-full h-[240px] md:h-[300px] object-cover"
            />
            <div className="mt-3">
              <p className="font-semibold">{leftCard.title}</p>
              <p className="text-sm text-gray-500">{leftCard.desc}</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <img
                      src={`${item.img}?auto=format&fit=crop&w=800`}
                      className="w-full h-[240px] md:h-[300px] object-cover"
                    />
                    <div className="mt-3">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}
