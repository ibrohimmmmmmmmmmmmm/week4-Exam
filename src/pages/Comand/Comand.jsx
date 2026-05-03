import React from 'react'
import { useTranslation } from "react-i18next";

import OurManagers from '../../components/OurManagers/OurManagers'
import TeamSection from '../../components/TeamSection/TeamSection'
import RequstSectionOfComamnd from '../../components/RequstSectionOfComamnd/RequstSectionOfComamnd'

import img from "../Comand/Rectangle 125.png"
import img2 from "../Comand/Rectangle 126.png"
import img3 from "../Comand/Rectangle 135.png"

export default function Comand() {
  const { t } = useTranslation();

  return (
    <>
      <div>

        <p className='text-[28px] md:text-[60px] p-5 md:p-10'>
          {t("our")} <span className='text-[#EFA359]'>{t("team")}</span>
        </p> 

        <p className='text-[16px] md:text-[40px] bg-[#EFA359] min-h-[80px] md:h-[108px] flex justify-center items-center text-white text-center px-3'>
          Win Dom 
          <span className='text-[14px] md:text-[35px] ml-2'>
            — {t("teamDesc")}
          </span>
        </p>

        <div className='p-5 md:p-15'>
          <div className='w-full md:w-[70%]'>
            <span className='text-[14px] md:text-[30px] text-[#000000]'>
              {t("managersDesc")}
            </span>
          </div>

          <div className='flex flex-col md:flex-row items-center md:justify-between gap-6 mt-10'>
            
            <OurManagers 
              img={img} 
              name={t("igorName")} 
              job={t("igorJob")} 
            />

            <OurManagers 
              img={img2} 
              name={t("luizaName")} 
              job={t("luizaJob")} 
            />

            <img src={img3} alt="" />
          </div>
        </div>
      </div>

      <TeamSection />
      <RequstSectionOfComamnd />
    </>
  )
}
