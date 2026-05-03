import React from 'react'
import { useTranslation } from "react-i18next";

export default function HurryUp() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[350px] md:h-[420px] lg:h-[500px] overflow-hidden">
      
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h2 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug max-w-[900px]">
          {t("hurry.title1")} <br />
          {t("hurry.title2")}{" "}
          <span className="text-orange-400">
            {t("hurry.project")}
          </span>
        </h2>

        <div className="w-24 h-[2px] bg-orange-400 my-4"></div>

        <p className="text-gray-200 text-sm md:text-base mb-6">
          {t("hurry.free")}{" "}
          <span className="text-orange-400 font-semibold">
            12
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3">

          <button className="bg-[#EFA35A] hover:bg-orange-500 text-white px-6 py-3 text-sm md:text-base font-medium transition">
            {t("hurry.btn1")}
          </button>

          <button className="bg-white/80 hover:bg-white text-black px-6 py-3 text-sm md:text-base font-medium transition">
            {t("hurry.btn2")}
          </button>

        </div>
      </div>
    </section>
  )
}
