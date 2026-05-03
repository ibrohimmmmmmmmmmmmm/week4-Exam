import React from "react";
import { useTranslation } from "react-i18next";

export default function NowForBuying({ img, desc, price, button }) {
  const { t } = useTranslation();

  return (
    <div className="mt-10 w-full sm:w-fit">
      <img className="mb-6 sm:mb-10 w-full max-w-[400px] object-cover" src={img} alt="" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-bold text-lg sm:text-[23px]">{desc}</p>
          <p className="text-lg sm:text-[24px]">{price}</p>
        </div>

        <p className="text-white bg-[#7D5E40] py-3 px-6 sm:px-10 text-center text-xs sm:text-sm">
          {t("now.status")}
        </p>
      </div>
    </div>
  );
}
