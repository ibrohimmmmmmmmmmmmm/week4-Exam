import React from "react";
import { useTranslation } from "react-i18next";

import img1 from "../Section3Home/Rectangle 92 (2).png";
import img2 from "../Section3Home/Rectangle 93.png";
import img3 from "../Section3Home/Rectangle 94.png";
import img4 from "../Section3Home/Rectangle 94 (1).png";

export default function Section3Home() {
  const { t } = useTranslation();

  const cards = t("home.section3.cards", { returnObjects: true }) || [];
  const team = t("home.section3.team.members", { returnObjects: true }) || [];

  return (
    <section className="bg-white py-16 px-4 md:px-10 ">
      <div className="max-w-[1200px] mx-auto mb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          {t("home.section3.title1")}{" "}
          <span className="text-[#EFA35A]">
            {t("home.section3.title2")}
          </span>{" "}
          {t("home.section3.title3")}
        </h2>
        <p className="text-gray-600 text-sm mb-8">
          {t("home.section3.subtitle")}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((item, i) => (
            <div
              key={i}
              className="border border-[#EFA35A] flex flex-col md:flex-row overflow-hidden"
            >
              <div className="p-6 flex flex-col justify-between w-full md:w-[55%]">
                <div>
                  <h3 className="font-semibold text-sm mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 mb-4">
                    {item.text}
                  </p>

                  <div className="flex gap-6 text-sm mb-2">
                    <div>
                      <p className="font-semibold">{item.percent}</p>
                      <p className="text-gray-500 text-xs">
                        {t("home.section3.rate")}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">{item.firstPay}</p>
                      <p className="text-gray-500 text-xs">
                        {t("home.section3.firstPay")}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-4 bg-[#EFA35A] text-white px-4 py-2 text-sm w-fit">
                  {t("home.section3.btn")}
                </button>
              </div>

              <img
                src={item.img}
                className="w-full md:w-[45%] h-[200px] md:h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            {t("home.section3.team.title1")}{" "}
            <span className="text-[#EFA35A]">
              {t("home.section3.team.title2")}
            </span>
          </h2>

          <span className="text-[#EFA35A] text-xl cursor-pointer">→</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-gray-600 text-sm mb-8">
          <p>{t("home.section3.team.desc1")}</p>
          <p>{t("home.section3.team.desc2")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[img1, img2, img3, img4].map((img, i) => (
            <div key={i} className="text-center">

              <img
                src={img}
                className="h-[200px] md:h-[240px] w-full object-cover mb-3"
              />

              <h4 className="text-sm font-semibold">
                {team[i]?.name}
              </h4>

              <p className="text-xs text-gray-500">
                {team[i]?.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
