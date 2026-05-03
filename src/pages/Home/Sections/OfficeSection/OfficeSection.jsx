import React from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Clock } from "lucide-react";

export default function OfficeSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f5f5f5] py-12 md:py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-[20px] md:text-[24px] font-semibold mb-6 md:mb-8">
          <span className="text-[#EFA35A]">
            {t("office.title1")}
          </span>{" "}
          {t("office.title2")}
        </h2>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
          
          <iframe
            src="https://www.google.com/maps?q=Kazan&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>

          <div className="hidden md:block absolute left-10 top-10 bg-white p-8 w-[350px] shadow-xl rounded-md">
            
            <h3 className="text-lg font-semibold mb-4">
              {t("office.name")}
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              {t("office.desc")}
            </p>

            <div className="flex items-start gap-3 mb-4 text-sm text-gray-700">
              <MapPin size={18} className="text-[#EFA35A]" />
              <span>{t("office.address")}</span>
            </div>

            <div className="flex items-center gap-3 mb-4 text-sm text-gray-700">
              <Clock size={18} className="text-[#EFA35A]" />
              <span>{t("office.time")}</span>
            </div>

            <div className="flex items-center gap-3 mb-6 text-sm text-gray-700">
              <Phone size={18} className="text-[#EFA35A]" />
              <span>{t("office.phone")}</span>
            </div>

            <button className="bg-[#EFA35A] text-white px-6 py-3 text-sm hover:opacity-90 transition">
              {t("office.btn")}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
