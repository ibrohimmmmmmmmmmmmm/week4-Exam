import React from "react";
import { useTranslation } from "react-i18next";

import plan1 from "./Rectangle 195 (1).png";
import plan2 from "./Rectangle 196 (1).png";
import banner from "./Rectangle 189 (1).png";
import proj1 from "./Rectangle 88 (2).png";
import proj2 from "./Rectangle 86 (1).png";

export default function PlansSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="space-y-5">
          <h2 className="text-xl md:text-3xl font-bold">
            {t("plans.title1")}{" "}
            <span className="text-[#E59B52]">
              {t("plans.title2")}
            </span>
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            {t("plans.desc1")}
          </p>

          <p className="text-sm text-gray-700">
            {t("plans.desc2")}
          </p>

          <div className="space-y-2 text-sm text-gray-800">
            <p>{t("plans.list.0")}</p>
            <p>{t("plans.list.1")}</p>
            <p>{t("plans.list.2")}</p>
            <p>{t("plans.list.3")}</p>
            <p>{t("plans.list.4")}</p>
          </div>

          <div className="flex gap-3 pt-3">
            <button className="border px-4 py-2 text-sm">
              {t("plans.floor1")}
            </button>
            <button className="bg-[#E59B52] text-white px-4 py-2 text-sm">
              {t("plans.floor2")}
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src={plan2}
            className="w-[80%] md:w-[70%] opacity-30 absolute right-0 top-6"
          />
          <img
            src={plan1}
            className="w-[90%] md:w-[75%] relative z-10 shadow-lg"
          />
        </div>

      </div>

      <div
        className="relative w-full h-[250px] md:h-[320px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4 space-y-4">
          <h3 className="text-lg md:text-2xl font-semibold">
            {t("plans.banner.title1")} <br />
            {t("plans.banner.title2")}{" "}
            <span className="text-[#E59B52]">
              {t("plans.banner.title3")}
            </span>
          </h3>

          <p className="text-sm">
            {t("plans.banner.free")} <b>12</b>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-[#E59B52] px-5 py-2 text-sm">
              {t("plans.banner.btn1")}
            </button>
            <button className="bg-white text-black px-5 py-2 text-sm">
              {t("plans.banner.btn2")}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 md:py-16 space-y-8">
        
        <h2 className="text-xl md:text-2xl font-bold">
          {t("plans.other.title1")}{" "}
          <span className="text-[#E59B52]">
            {t("plans.other.title2")}
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img src={proj1} className="w-full h-[220px] md:h-[280px] object-cover" />
            <div className="mt-3">
              <p className="font-semibold">{t("plans.other.card1.title")}</p>
              <p className="text-sm text-gray-500">
                {t("plans.other.card1.desc")}
              </p>
            </div>
          </div>

          <div>
            <img src={proj2} className="w-full h-[220px] md:h-[280px] object-cover" />
            <div className="mt-3">
              <p className="font-semibold">{t("plans.other.card2.title")}</p>
              <p className="text-sm text-gray-500">
                {t("plans.other.card2.desc")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
