import React, { memo } from 'react'
import { useTranslation } from "react-i18next";

import HousesSectionFirstFloor from '../../components/HousesSectionFirstFloor/HousesSectionFirstFloor'
import HurryUp from '../../components/HurryUp/HurryUp'
import OfficeSection from '../Home/Sections/OfficeSection/OfficeSection'

import img from "./Rectangle 214 (4).png"

export default memo(function Townhouses() {
  const { t } = useTranslation();

  return (
    <>
      <img src={img} alt="" />

      <HousesSectionFirstFloor 
        floor={t("townhouses")} 
        home="" 
      />

      <HurryUp />
      <OfficeSection />
    </>
  )
})
