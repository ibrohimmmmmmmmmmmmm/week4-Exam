import React from "react";
import { useTranslation } from "react-i18next";

import img from "./rectangle-37-4.png";
import img2 from "../../pages/SilverVillage/ibb.png";
import img3 from "../../assets/Rectangle 92 (7).png";

import SilverHeader from "../SilverVillage/SilverHeader";
import AboutProject from "../../components/AboutProject/AboutProject";
import TransportSection from "../../components/TransportSection/TransportSection";
import MapOnly from "../../components/MapOnly/MapOnly";
import GallerySection from "../../components/GallerySection/GallerySection";
import PopularProjects from "../../components/PopularProjects/PopularProjects";
import PlansSection from "../../components/PlansSection/PlansSection";
import OfficeSection from "../Home/Sections/OfficeSection/OfficeSection";
import NowForBuying from "../../components/NowForBuying/NowForBuying";

export default function IQClub() {
  const { t } = useTranslation();

  return (
    <div>
      <SilverHeader
        bgImage={img}
        name1={t("iq.header.desc")}
        name2="IQ"
        span="CLUB"
      />

      <AboutProject name="IQ CLUB" />

      <div className="p-10 md:p-15">
        <p className="text-2xl md:text-[46px]">
          {t("iq.plan.title1")}{" "}
          <span className="text-[#EFA359]">
            {t("iq.plan.title2")}
          </span>
        </p>
        <img src={img2} />
      </div>

      <TransportSection />
      <MapOnly />
      <GallerySection />
      <PopularProjects />

      <div className="p-10 md:p-15">
        <p className="text-2xl md:text-[46px]">
          {t("iq.buy.title1")}{" "}
          <span className="text-[#EFA35A]">
            {t("iq.buy.title2")}
          </span>
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <NowForBuying
            img={img3}
            desc={t("iq.buy.card.desc")}
            price={t("iq.buy.card.price")}
          />
          <NowForBuying
            img={img3}
            desc={t("iq.buy.card.desc")}
            price={t("iq.buy.card.price")}
          />
        </div>
      </div>

      <PlansSection />
      <OfficeSection />
    </div>
  );
}
