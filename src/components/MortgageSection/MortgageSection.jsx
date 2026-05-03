import React, { useState } from "react";
import {
  Slider,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Banknote,
  CircleDollarSign,
} from "lucide-react";

export default function MortgageSection() {
  const { t } = useTranslation();

  const [price, setPrice] = useState(3000000);
  const [initial, setInitial] = useState(2000000);
  const [monthly, setMonthly] = useState(60000);

  return (
    <section className="w-full py-8 sm:py-10 px-3 sm:px-4 md:px-10 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6">
        
        <div className="space-y-6 sm:space-y-5">

          <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
            {t("mortgage.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <FormControl fullWidth size="small">
              <Select defaultValue="all">
                <MenuItem value="all">{t("mortgage.all")}</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <Select defaultValue="all">
                <MenuItem value="all">{t("mortgage.all")}</MenuItem>
              </Select>
            </FormControl>
          </div>

          <FormControl fullWidth size="small">
            <Select defaultValue="all">
              <MenuItem value="all">{t("mortgage.all")}</MenuItem>
            </Select>
          </FormControl>

          {[
            {
              label: t("mortgage.price"),
              value: price,
              set: setPrice,
              min: 1000000,
              max: 10000000,
            },
            {
              label: t("mortgage.initial"),
              value: initial,
              set: setInitial,
              min: 500000,
              max: 5000000,
            },
            {
              label: t("mortgage.monthly"),
              value: monthly,
              set: setMonthly,
              min: 10000,
              max: 200000,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none shadow-sm sm:shadow-none"
            >
              <p className="text-sm mb-1 font-medium">{item.label}</p>
              <p className="text-sm text-gray-600 mb-2">
                {item.value.toLocaleString()} ₽
              </p>
              <Slider
                value={item.value}
                onChange={(e, val) => item.set(val)}
                min={item.min}
                max={item.max}
                sx={{ color: "#E59B52" }}
              />
            </div>
          ))}

          <button className="w-full bg-[#E59B52] hover:bg-[#d4883f] text-white py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold shadow-md">
            {t("mortgage.button")}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: t("mortgage.banks.alfa"),
              rate: "4,1 %",
              program: t("mortgage.programs.family"),
              icon: <Banknote size={20} />,
            },
            {
              title: t("mortgage.banks.vtb"),
              rate: "6 %",
              program: t("mortgage.programs.gov"),
              icon: <Building2 size={20} />,
            },
            {
              title: t("mortgage.banks.sber"),
              rate: "4 %",
              program: t("mortgage.programs.it"),
              icon: <CircleDollarSign size={20} />,
            },
            {
              title: t("mortgage.banks.sovkom"),
              rate: "4 %",
              program: t("mortgage.programs.family"),
              icon: <CircleDollarSign size={20} />,
            },
          ].map((bank, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-4 sm:p-5 space-y-3 shadow-sm sm:shadow-none hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 font-medium text-sm sm:text-base">
                {bank.icon}
                {bank.title}
              </div>

              <div>
                <p className="text-xs sm:text-sm text-gray-500">
                  {t("mortgage.rate")}
                </p>
                <p className="text-lg sm:text-xl font-semibold">
                  {bank.rate}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {t("mortgage.from")}
                </p>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-gray-500">
                  {t("mortgage.program")}
                </p>
                <p className="text-sm">{bank.program}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
