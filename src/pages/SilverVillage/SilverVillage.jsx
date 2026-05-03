import React from "react";
import { useTranslation } from "react-i18next";
import img from "../SilverVillage/Rectangle-37-3.png";
import SilverHeader from "./SilverHeader";
import AboutProject from "../../components/AboutProject/AboutProject";
import img2 from "../../pages/SilverVillage/ibb.png";
import TransportSection from "../../components/TransportSection/TransportSection";
import OfficeSection from "../Home/Sections/OfficeSection/OfficeSection";
import GallerySection from "../../components/GallerySection/GallerySection";
import PopularProjects from "../../components/PopularProjects/PopularProjects";
import NowForBuying from "../../components/NowForBuying/NowForBuying";
import img3 from "../../assets/Rectangle 92 (7).png";
import PlansSection from "../../components/PlansSection/PlansSection";
import MapOnly from "../../components/MapOnly/MapOnly";

export default function SilverVillage() {
  const { t } = useTranslation();

  return (
    <div>
      <SilverHeader
        bgImage={img}
        name1={t("village.header.subtitle")}
        name2={t("village.header.title")}
        span="VILLAGE"
      />

      <AboutProject name={t("village.about.title")} />

      <div className="px-4 md:px-10 py-10 max-w-[1200px] mx-auto">
        <p className="text-[26px] sm:text-[32px] md:text-[46px] font-semibold mb-6">
          {t("village.plan.title1")}{" "}
          <span className="text-[#EFA359]">
            {t("village.plan.title2")}
          </span>
        </p>

        <img
          src={img2}
          alt=""
          className="w-full object-cover"
        />
      </div>

      <TransportSection />
      <MapOnly />
      <GallerySection />
      <PopularProjects />

      <div className="px-4 md:px-10 py-10 max-w-[1200px] mx-auto">
        <p className="text-[26px] sm:text-[32px] md:text-[46px] font-semibold mb-8">
          {t("village.buy.title1")}{" "}
          <span className="text-[#EFA35A]">
            {t("village.buy.title2")}
          </span>{" "}
          {t("village.buy.title3")}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
          <NowForBuying
            img={img3}
            desc={t("village.buy.cardDesc")}
            price={t("village.buy.price")}
          />
          <NowForBuying
            img={img3}
            desc={t("village.buy.cardDesc")}
            price={t("village.buy.price")}
          />
        </div>
      </div>

      <PlansSection />
      <OfficeSection />
    </div>
  );
}
