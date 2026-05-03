import React from "react";
import { Phone, Mail } from "lucide-react";
import { FaYoutube, FaVk, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function CenterOffice() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f3f3f3] py-10 md:py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold leading-tight mb-5 md:mb-6">
            {t("contactPage.title1")} <br />
            {t("contactPage.title2")}{" "}
            <span className="text-[#EFA35A]">WIN DOM</span>
          </h2>

          <p className="text-gray-700 mb-5 md:mb-6 text-sm md:text-base">
            {t("contactPage.address")}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-5 md:mb-6">
            <div className="flex items-center gap-2 text-gray-800 text-sm md:text-base">
              <Phone size={18} className="text-[#EFA35A]" />
              <span>+7 (962) 555-25-25</span>
            </div>

            <div className="flex items-center gap-2 text-gray-800 text-sm md:text-base">
              <Phone size={18} className="text-[#EFA35A]" />
              <span>+7 (962) 591-79-60</span>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 hover:bg-black hover:text-white transition cursor-pointer">
              <FaYoutube />
            </div>
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 hover:bg-black hover:text-white transition cursor-pointer">
              <FaVk />
            </div>
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 hover:bg-black hover:text-white transition cursor-pointer">
              <FaLinkedin />
            </div>
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 hover:bg-black hover:text-white transition cursor-pointer">
              <FaWhatsapp />
            </div>
          </div>

          {/* EMAIL */}
          <div className="border border-[#EFA35A] inline-flex items-center gap-3 px-4 py-3 text-sm">
            <Mail size={18} className="text-[#EFA35A]" />
            <span>windom.kazan@gmail.com</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-5 sm:p-6 md:p-8 shadow-md w-full max-w-[420px] mx-auto md:ml-auto">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            {t("contactPage.formTitle")}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mb-5 md:mb-6">
            {t("contactPage.formDesc")}
          </p>

          <input
            type="text"
            placeholder={t("contactPage.name")}
            className="w-full mb-4 px-4 py-3 bg-gray-100 outline-none text-sm"
          />

          <input
            type="text"
            placeholder={t("contactPage.phone")}
            className="w-full mb-4 px-4 py-3 bg-gray-100 outline-none text-sm"
          />

          <button className="w-full bg-[#EFA35A] text-white py-3 text-sm hover:opacity-90 transition">
            {t("contactPage.btn")}
          </button>

          <p className="text-[10px] sm:text-[11px] text-gray-500 mt-4 leading-snug">
            {t("contactPage.policy1")}{" "}
            <span className="text-[#EFA35A] underline cursor-pointer">
              {t("contactPage.policy2")}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
