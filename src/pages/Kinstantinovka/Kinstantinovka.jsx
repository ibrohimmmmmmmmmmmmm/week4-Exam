import React from 'react'
import { useTranslation } from "react-i18next";

import SilverHeader from '../SilverVillage/SilverHeader'
import AboutProject from '../../components/AboutProject/AboutProject'
import GallerySection from '../../components/GallerySection/GallerySection'
import OfficeSection from '../Home/Sections/OfficeSection/OfficeSection'
import VideoSection from '../../components/VideoSection/VideoSection'
import HurryUp from '../../components/HurryUp/HurryUp'

import img from "./fgcvh.png"

export default function Kinstantinovka() {
  const { t } = useTranslation();

  return (
    <div>
      <SilverHeader 
        bgImage={img} 
        name1={t("konstant.headerTop")} 
        name2={t("konstant.headerMain")} 
        span={t("konstant.headerSpan")} 
      />

      <AboutProject name={t("konstant.projectName")} />

      <VideoSection />

      <GallerySection />

      <HurryUp />

      <OfficeSection />
    </div>
  )
}
