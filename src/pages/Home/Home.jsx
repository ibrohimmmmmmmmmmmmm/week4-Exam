import React from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";

import Section1Home from "./Sections/Section1Home/Section1Home";
import Section2Home from "./Sections/Section2Home/Section2Home";
import Section3Home from "./Sections/Section3Home/Section3Home";
import Section4Home from "./Sections/Section4Home/Section4Home";
import Section5Home from "./Sections/Section5Home/Section5Home";
import OfficeSection from "./Sections/OfficeSection/OfficeSection";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative w-full h-auto min-h-[600px] flex items-end">
        {/* Background Layers */}
        <div className="absolute inset-0 background"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-12 md:pb-24 text-white">
          <div className="max-w-[900px]">
            
            <p className="text-[12px] md:text-[14px] uppercase tracking-[0.3em] mb-4 opacity-90 font-medium">
              {t("home.hero.company")}
            </p>

            {/* Use clamp or vw for the heading to fix the zoom/tabbing issue */}
            <h1 className="font-black text-[#EFA359] leading-[0.8] mb-6
              text-[15vw] md:text-[12vw] lg:text-[180px] select-none">
              WIN
            </h1>

            <p className="text-[14px] md:text-[18px] leading-relaxed mb-8 max-w-[550px] text-gray-200">
              {t("home.hero.description")}
            </p>

            <div className="flex">
              <Button 
                name={t("home.hero.button")} 
                bg="bg-[#EFA359]" 
                className="px-10 py-4 text-sm font-bold uppercase tracking-widest"
              />
            </div>

          </div>
        </div>
      </section>

      <Section1Home />
      <Section2Home />
      <Section3Home />
      <Section4Home />
      <Section5Home />
      <OfficeSection />
    </>
  );
}