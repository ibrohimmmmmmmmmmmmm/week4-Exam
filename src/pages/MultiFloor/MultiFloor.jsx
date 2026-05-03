import React, { memo } from 'react'
import { useTranslation } from "react-i18next";

import HousesSectionFirstFloor from '../../components/HousesSectionFirstFloor/HousesSectionFirstFloor'
import HurryUp from '../../components/HurryUp/HurryUp'
import OfficeSection from '../Home/Sections/OfficeSection/OfficeSection'

import img from "./Rectangle 214 (3).png"

export default memo(function MultiFloor() {
  const { t } = useTranslation();

  return (
    <>
      <img src={img} alt="" />

      <HousesSectionFirstFloor 
        floor={t("twoFloor")} 
        home={t("housesc")} 
      />

      <HurryUp />
      <OfficeSection />
    </>
  )
})
