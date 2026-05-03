import React from "react";
import { useTranslation } from "react-i18next";

export default function Section4Home() {
  const { t } = useTranslation();

  const news = t("home.section4.news", { returnObjects: true }) || [];

  return (
    <section className="w-full bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 py-16 px-6">

        <div className="relative col-span-2 h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

          <div className="relative z-10 text-white p-8 max-w-[500px] flex flex-col justify-center h-full">

            <h2 className="text-[#EFA35A] text-lg uppercase mb-4 tracking-wide">
              {t("home.section4.title")}
            </h2>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {t("home.section4.main.title")}
            </h3>

            <p className="text-sm text-gray-300 mb-6">
              {t("home.section4.main.desc")}
            </p>

            <button className="bg-[#EFA35A] px-6 py-3 text-sm w-fit">
              {t("home.section4.btn")}
            </button>

          </div>
        </div>

        <div className="flex flex-col gap-4">

          <div className="bg-white p-3 flex items-center gap-3 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
              className="w-16 h-12 object-cover"
            />
            <p className="text-xs text-gray-600">
              {Array.isArray(news) ? news[0] : ""}
            </p>
          </div>

          {/* big */}
          <div className="bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9"
              className="h-[160px] w-full object-cover"
            />
            <div className="p-4">
              <h4 className="text-sm font-semibold mb-2">
                {t("home.section4.second.title")}
              </h4>
              <p className="text-xs text-gray-500">
                {t("home.section4.second.desc")}
              </p>
            </div>
          </div>

          <div className="bg-white p-3 flex gap-3 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              className="w-20 h-16 object-cover"
            />
            <p className="text-xs text-gray-600">
              {Array.isArray(news) ? news[1] : ""}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
