import React from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import img1 from "./Rectangle 144.png";
import img2 from "./Rectangle 147.png";
import img3 from "./Rectangle 147 (1).png";
import img4 from "./Rectangle 144 (1).png";

export default function MortgagePrograms() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f5f5f5] py-8 md:py-12 px-3 md:px-10">
      <div className="max-w-[1200px] mx-auto space-y-6">

        <div className="grid md:grid-cols-2 bg-[#eaeaea] overflow-hidden">
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              {t("mortgagePrograms.mainTitle")}
            </h2>
            <p className="text-sm text-gray-700 mb-6">
              {t("mortgagePrograms.mainDesc")}
            </p>
            <Button variant="outlined" sx={{ borderColor: "#E59B52", color: "#000" }}>
              {t("mortgagePrograms.btn")}
            </Button>
          </div>
          <img src={img1} className="w-full h-[250px] md:h-full object-cover" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="grid sm:grid-cols-2 bg-[#eaeaea] overflow-hidden">
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-3">
                {t("mortgagePrograms.familyTitle")}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {t("mortgagePrograms.familyDesc")}
              </p>
              <Button variant="outlined" sx={{ borderColor: "#E59B52", color: "#000" }}>
                {t("mortgagePrograms.btn")}
              </Button>
            </div>
            <img src={img2} className="w-full h-[220px] object-cover" />
          </div>

          <div className="grid sm:grid-cols-2 bg-[#eaeaea] overflow-hidden">
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-3">
                {t("mortgagePrograms.govTitle")}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {t("mortgagePrograms.govDesc")}
              </p>
              <Button variant="outlined" sx={{ borderColor: "#E59B52", color: "#000" }}>
                {t("mortgagePrograms.btn")}
              </Button>
            </div>
            <img src={img3} className="w-full h-[220px] object-cover" />
          </div>

        </div>

        <div className="grid md:grid-cols-2 bg-[#eaeaea] overflow-hidden">
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">
              {t("mortgagePrograms.itTitle")}
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              {t("mortgagePrograms.itDesc")}
            </p>
            <Button variant="outlined" sx={{ borderColor: "#E59B52", color: "#000" }}>
              {t("mortgagePrograms.btn")}
            </Button>
          </div>
          <img src={img4} className="w-full h-[250px] md:h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
