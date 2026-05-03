import React from "react";
import { useTranslation } from "react-i18next";

export default function TransportSection() {
  const { t } = useTranslation();

  const items = [
    { time: t("transport.items.item1.time"), text: t("transport.items.item1.text") },
    { time: t("transport.items.item2.time"), text: t("transport.items.item2.text") },
    { time: t("transport.items.item3.time"), text: t("transport.items.item3.text") },
  ];

  const malls = [
    { id: 1, name: t("transport.malls.mall1.name"), time: t("transport.malls.mall1.time") },
    { id: 2, name: t("transport.malls.mall2.name"), time: t("transport.malls.mall2.time") },
    { id: 3, name: t("transport.malls.mall3.name"), time: t("transport.malls.mall3.time") },
    { id: 4, name: t("transport.malls.mall4.name"), time: t("transport.malls.mall4.time") },
  ];

  return (
    <section className="bg-[#f5f5f5] py-10 md:py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto space-y-10">

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {t("transport.title1")}{" "}
              <span className="text-[#E59B52]">
                {t("transport.title2")}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-700 mt-4 leading-relaxed">
              <span className="text-[#E59B52] font-semibold">
                {t("transport.name")}
              </span>{" "}
              {t("transport.desc1")}
            </p>
          </div>

          <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {t("transport.desc2")}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {items.map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-[48px] sm:text-[60px] md:text-[80px] font-bold text-[#E59B52]">
                {item.time}
              </h3>

              <div className="w-full h-[2px] bg-[#E59B52] max-w-[200px] mx-auto" />

              <p className="text-sm sm:text-base text-gray-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {malls.map((mall) => (
            <div
              key={mall.id}
              className="border border-[#E59B52] p-4 flex flex-col gap-2 bg-white"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#E59B52] text-white text-xs rounded-full">
                  {mall.id}
                </div>
                <p className="text-sm font-medium">{mall.name}</p>
              </div>

              <p className="text-xs text-gray-600 flex items-center gap-2">
                🚗 {mall.time}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
