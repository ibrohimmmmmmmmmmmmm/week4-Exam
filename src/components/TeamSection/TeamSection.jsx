import React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@mui/material";
import { MessageCircle, Star } from "lucide-react";

import img1 from "../../components/TeamSection/Rectangle 92 (3).png"
import img2 from "../../components/TeamSection/Rectangle 92 (4).png"
import img3 from "../../components/TeamSection/Rectangle 92 (5).png"
import img4 from "../../components/TeamSection/Rectangle 92 (6).png"

export default function TeamSection() {
  const { t } = useTranslation();

  const teamData = [
    {
      name: "Анфиса Давыдова",
      role: t("marketingHead"),
      img: img1,
    },
    {
      name: "Евгений Кабаков",
      role: t("salesHead"),
      img: img2,
    },
    {
      name: "Эльвира Сергеева",
      role: t("mortgageHead"),
      img: img3,
    },
    {
      name: "Игорь Смирнов",
      role: t("manager"),
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    },
    {
      name: "Иван Иванов",
      role: t("manager"),
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Лариса Федотова",
      role: t("lawyer"),
      img: "https://images.unsplash.com/photo-1614289371518-722f2615943d",
    },
    {
      name: "Алексей Кузин",
      role: t("siteHead"),
      img: img4,
    },
    {
      name: "Николай Елистратов",
      role: t("foreman"),
      img: img2,
    },
    {
      name: "Фаниль Саляхиев",
      role: t("foreman"),
      img: img3,
    }
  ];

  return (
    <section className="relative py-16 bg-[#f7f7f7] overflow-hidden">
      
      <div className="hidden lg:block absolute left-0 top-0 w-[80px] h-full bg-[#EFA359]" />
      <div className="hidden lg:block absolute right-0 top-0 w-[80px] h-full bg-[#EFA359]" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.role}</p>

                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                  <Button
                    variant="contained"
                    className="!bg-[#EFA359] !text-white !text-xs flex gap-1"
                  >
                    <MessageCircle size={16} />
                    {t("write")}
                  </Button>

                  <Button
                    variant="outlined"
                    className="!border-[#EFA359] !text-[#EFA359] !text-xs flex gap-1"
                  >
                    <Star size={16} />
                    {t("review")}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
