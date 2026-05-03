import React from "react";
import { useTranslation } from "react-i18next";

import mainImg from "./Rectangle 136.png"; 
import person1 from "./Rectangle 127.png";
import person2 from "./Rectangle 128.png";

export default function RequstSectionOfComamnd() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F5F5F5] py-10 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-10 items-start">

        <div className="w-full md:w-[40%]">
          <img
            src={mainImg}
            alt=""
            className="w-full h-[240px] sm:h-[300px] md:h-[420px] object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-[60%] flex flex-col justify-between">

          <p className="text-[13px] sm:text-[14px] md:text-base text-gray-700 leading-relaxed mb-6 md:mb-8">
            {t("requestText")}
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">

            <div className="flex items-center sm:items-start gap-4 bg-white p-3 rounded-lg shadow-sm md:shadow-none md:bg-transparent md:p-0">

              <img
                src={person1}
                alt=""
                className="w-[110px] h-[140px] sm:w-[130px] sm:h-[170px] md:w-[140px] md:h-[180px] object-cover rounded"
              />

              <div className="flex flex-col justify-center">
                <h3 className="text-[14px] sm:text-[16px] md:text-xl font-semibold leading-tight">
                  {t("person1NameLine1")} <br /> {t("person1NameLine2")}
                </h3>

                <div className="bg-[#EFA35A] text-white px-3 py-1.5 mt-2 text-[11px] sm:text-xs md:text-sm w-fit rounded-sm">
                  {t("personRoleLine1")} <br /> {t("personRoleLine2")}
                </div>
              </div>
            </div>

            <div className="flex items-center sm:items-start gap-4 bg-white p-3 rounded-lg shadow-sm md:shadow-none md:bg-transparent md:p-0">

              <img
                src={person2}
                alt=""
                className="w-[110px] h-[140px] sm:w-[130px] sm:h-[170px] md:w-[140px] md:h-[180px] object-cover rounded"
              />

              <div className="flex flex-col justify-center">
                <h3 className="text-[14px] sm:text-[16px] md:text-xl font-semibold leading-tight">
                  {t("person2NameLine1")} <br /> {t("person2NameLine2")}
                </h3>

                <div className="bg-[#EFA35A] text-white px-3 py-1.5 mt-2 text-[11px] sm:text-xs md:text-sm w-fit rounded-sm">
                  {t("personRoleLine1")} <br /> {t("personRoleLine2")}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
