import React from "react";
import { School, Bus, Store, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

import img1 from "../../components/AboutProject/Rectangle 189.png";
import img2 from "../../components/AboutProject/Rectangle 190.png";

export default function AboutProject(props) {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f5f5f5] py-10 md:py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="md:hidden flex flex-col gap-4">
          <img src={img2} className="w-full h-[240px] object-cover rounded shadow" />
          <img src={img1} className="w-full h-[200px] object-cover rounded shadow" />
        </div>

        <div className="relative hidden md:block w-full h-[460px]">
          <div className="absolute top-[40px] left-[140px] w-[320px] h-[380px] border border-[#E59B52] z-0" />

          <img
            src={img1}
            className="absolute top-[80px] left-[0px] h-[360px] object-cover z-10 shadow-md"
          />

          <img
            src={img2}
            className="absolute top-[0px] left-[250px] h-[420px] object-cover z-20 shadow-xl"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            {t("aboutProject.title1")}{" "}
            <span className="text-[#E59B52]">
              {t("aboutProject.title2")}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            <span className="text-[#E59B52] font-semibold">
              {props.name}
            </span>{" "}
            {t("aboutProject.desc")}
          </p>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <School size={22} />
              <p className="text-sm sm:text-base">
                {t("aboutProject.items.school")}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Bus size={22} />
              <p className="text-sm sm:text-base">
                {t("aboutProject.items.transport")}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Store size={22} />
              <p className="text-sm sm:text-base">
                {t("aboutProject.items.shops")}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={22} />
              <p className="text-sm sm:text-base">
                {t("aboutProject.items.infrastructure")}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
