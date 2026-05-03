import React from "react";
import { useTranslation } from "react-i18next";

import SilverHeader from "../SilverVillage/SilverHeader";
import AboutProject from "../../components/AboutProject/AboutProject";
import GallerySection from "../../components/GallerySection/GallerySection";
import OfficeSection from "../Home/Sections/OfficeSection/OfficeSection";
import HurryUp from "../../components/HurryUp/HurryUp";

import img from "./Rectangle 37-5.png";

export default function Usadi() {
  const { t } = useTranslation();

  return (
    <div>
      <SilverHeader
        bgImage={img}
        name1={t("usadi.header.desc")}
        name2={t("usadi.header.title")}
        span=""
      />

      <AboutProject name={t("usadi.projectName")} />

      <GallerySection />
      <HurryUp />
      <OfficeSection />
    </div>
  );
}
