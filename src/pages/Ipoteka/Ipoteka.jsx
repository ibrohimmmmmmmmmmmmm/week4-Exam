import React from "react";
import { Container, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import MortgageSection from "../../components/MortgageSection/MortgageSection";
import "./Ipoteka.css";
import MortgagePrograms from "../../components/MortgagePrograms/MortgagePrograms";
import FaqSection from "../../components/FaqSection/FaqSection";

export default function Ipoteka() {
  const { t } = useTranslation();

  return (
    <>
      <div className="ipoteka relative text-white">
        <div className="absolute inset-0 bg-black/40"></div>

        <Container maxWidth="lg" className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center min-h-[70vh] md:min-h-[80vh] gap-6">

            <h1 className="font-bold leading-tight 
              text-[40px] sm:text-[60px] md:text-[90px] lg:text-[105px]">
              {t("ipotekaPage.title")}{" "}
              <span className="text-[#EFA359] bg-white px-3 md:px-5">
                {t("ipotekaPage.percent")}
              </span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-[800px]">
              {t("ipotekaPage.desc1")} <br />
              {t("ipotekaPage.desc2")}
            </p>

            <p className="font-semibold text-base sm:text-lg md:text-xl">
              {t("ipotekaPage.desc3")}
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EFA359",
                padding: "14px 40px",
                fontSize: "18px",
                fontWeight: "600",
                borderRadius: "6px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#d88c45",
                },
              }}
            >
              {t("ipotekaPage.button")}
            </Button>

          </div>
        </Container>
      </div>

      <MortgageSection />
      <MortgagePrograms />
      <FaqSection />
    </>
  );
}
