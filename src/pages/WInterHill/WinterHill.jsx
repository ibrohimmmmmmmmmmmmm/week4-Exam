import React from 'react'
import { useTranslation } from "react-i18next";

import SilverHeader from '../SilverVillage/SilverHeader'
import AboutProject from '../../components/AboutProject/AboutProject'
import GallerySection from '../../components/GallerySection/GallerySection'
import OfficeSection from '../Home/Sections/OfficeSection/OfficeSection'
import HurryUp from '../../components/HurryUp/HurryUp'

import img from "./rrt.png"

export default function WinterHill() {
  const { t } = useTranslation();

  return (
    <div>
      <SilverHeader 
        bgImage={img} 
        name1={t("winter.headerTop")} 
        name2={t("winter.headerMain")} 
        span={t("winter.headerSpan")} 
      />

      <AboutProject name={t("winter.projectName")} />

      <GallerySection />

      <HurryUp />

      <OfficeSection />
    </div>
  )
}
