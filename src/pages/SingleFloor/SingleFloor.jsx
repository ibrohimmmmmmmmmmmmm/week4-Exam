import React from 'react'
import { useTranslation } from "react-i18next";

import img from "./Rectangle 214 (1).png"
import HousesSectionFirstFloor from '../../components/HousesSectionFirstFloor/HousesSectionFirstFloor'
import HurryUp from '../../components/HurryUp/HurryUp'
import OfficeSection from '../Home/Sections/OfficeSection/OfficeSection'

export default function SingleFloor() {
  const { t } = useTranslation();

  return (
    <>
      <img src={img} alt="" />

      <HousesSectionFirstFloor 
        floor={t("housess.single")} 
        home={t("houses.home")} 
      />

      <HurryUp />

      <OfficeSection />
    </>
  )
}
