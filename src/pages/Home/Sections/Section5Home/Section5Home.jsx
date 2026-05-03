import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Section5Home() {
  const { t } = useTranslation();

  const reviews = t("section5.reviews", { returnObjects: true });
  const smallNews = t("section5.smallNews", { returnObjects: true });

  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10">
          <span className="text-[#EFA35A]">
            {t("section5.title1")}
          </span>{" "}
          {t("section5.title2")}
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {Array.isArray(reviews) &&
            reviews.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white border border-[#EFA35A] p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={item.img}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.project}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {t("section5.newsTitle1")}{" "}
            <span className="italic text-gray-600">
              {t("section5.newsTitle2")}
            </span>
          </h2>

          <button className="border px-4 py-1 text-sm hover:bg-black hover:text-white transition">
            {t("section5.allNews")}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative md:col-span-2 h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-semibold">
                {t("section5.bigNews1.title")}
              </p>
              <p className="text-xs mt-1">
                {t("section5.bigNews1.date")}
              </p>
            </div>
          </div>

          <div className="relative h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-semibold">
                {t("section5.bigNews2.title")}
              </p>
              <p className="text-xs mt-1">
                {t("section5.bigNews2.date")}
              </p>
            </div>
          </div>

          {Array.isArray(smallNews) &&
            smallNews.map((item, i) => (
              <div key={i} className="relative h-[140px]">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-medium">{item.title}</p>
                  <p className="text-[10px]">{item.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: #000;
          }

          .swiper-pagination-bullet-active {
            background: #EFA35A;
          }
        `}
      </style>
    </section>
  );
}
