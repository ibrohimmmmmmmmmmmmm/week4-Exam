import React from "react";
import { useTranslation } from "react-i18next";

export default function MapOnly() {
  const { t } = useTranslation();

  return (
    <section className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
      <iframe
        src="https://www.google.com/maps?q=Kazan&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

      <div className="
        absolute
        bottom-6 left-1/2 -translate-x-1/2
        md:left-10 md:translate-x-0
        bg-white/90 backdrop-blur
        px-6 py-4
        rounded
        shadow-xl
        text-center md:text-left
      ">
        <p className="text-sm font-semibold">
          {t("map.title")}
        </p>
        <p className="text-xs text-gray-600">
          {t("map.subtitle")}
        </p>
      </div>

    </section>
  );
}
