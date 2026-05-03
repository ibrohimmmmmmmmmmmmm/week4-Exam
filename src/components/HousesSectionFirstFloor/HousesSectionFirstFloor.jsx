import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Home,
  LandPlot,
  Layers,
  Building2,
  DoorOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "./Rectangle 122 (6).png"
import img2 from "./Rectangle 122 (7).png"
import img3 from "./Rectangle 122 (8).png"
import img4 from "./Rectangle 122 (9).png"
import img5 from "./Rectangle 122 (10).png"
import img6 from "./Rectangle 122 (11).png"

export default function HousesSectionFirstFloor({ floor, home }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const houses = [
    {
      id: 1,
      title: "Win-1",
      price: "13 800 000 ₽",
      type: "single",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      area: "139,8 м2",
      land: "5,1 сот.",
      category: "ИЖС",
      floors: 1,
      rooms: 5,
    },
    {
      id: 2,
      title: "Win-2",
      price: "13 800 000 ₽",
      type: "double",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      area: "139,8 м2",
      land: "5,1 сот.",
      category: "ИЖС",
      floors: 2,
      rooms: 5,
    },
    {
      id: 3,
      title: "Win-3",
      price: "13 800 000 ₽",
      type: "townhouse",
      img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
      area: "139,8 м2",
      land: "5,1 сот.",
      category: "ИЖС",
      floors: 2,
      rooms: 5,
    },
    { id: 4, title: "Win-4", price: "13 800 000 ₽", type: "single", img: img1, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 1, rooms: 4 },
    { id: 5, title: "Win-5", price: "13 800 000 ₽", type: "single", img: img2, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 1, rooms: 5 },
    { id: 6, title: "Win-6", price: "13 800 000 ₽", type: "double", img: img3, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 2, rooms: 3 },
    { id: 7, title: "Win-7", price: "13 800 000 ₽", type: "double", img: img4, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 2, rooms: 3 },
    { id: 8, title: "Win-8", price: "13 800 000 ₽", type: "townhouse", img: img5, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 2, rooms: 5 },
    { id: 9, title: "Win-9", price: "13 800 000 ₽", type: "townhouse", img: img6, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 2, rooms: 5 },
  ];

  const filtered =
    filter === "all" ? houses : houses.filter((h) => h.type === filter);

  const btnClass = (type) =>
    `px-4 py-2 border text-sm transition ${
      filter === type
        ? "bg-orange-500 text-white border-orange-500"
        : "bg-white border-gray-300 hover:border-orange-500 hover:text-orange-500"
    }`;

  return (
    <section className="bg-[#f5f5f5] py-8 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          {floor} <span className="text-orange-500 italic">{home}</span>
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
          <button onClick={() => setFilter("single")} className={btnClass("single")}>
            {t("catalog.filter.single")}
          </button>
          <button onClick={() => setFilter("double")} className={btnClass("double")}>
            {t("catalog.filter.double")}
          </button>
          <button onClick={() => setFilter("townhouse")} className={btnClass("townhouse")}>
            {t("catalog.filter.townhouse")}
          </button>
          <button className="px-4 py-2 border text-sm bg-white border-gray-300 hover:border-orange-500 hover:text-orange-500">
            {t("catalog.filter.map")}
          </button>
          <button onClick={() => setFilter("all")} className={btnClass("all")}>
            {t("catalog.filter.all")}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((house) => (
            <div key={house.id} className="bg-white border border-[#EFA359] hover:shadow-lg transition">
              
              <img src={house.img} alt="" className="w-full h-[180px] md:h-[200px] object-cover" />

              <div className="p-4 space-y-3">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{house.title}</h3>
                  <span className="text-orange-500 font-medium text-sm md:text-base">
                    {house.price}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600">

                  <div className="flex items-center gap-2">
                    <Home size={16} className="text-orange-500" />
                    {t("catalog.labels.area")} {house.area}
                  </div>

                  <div className="flex items-center gap-2">
                    <LandPlot size={16} className="text-orange-500" />
                    {t("catalog.labels.land")} {house.land}
                  </div>

                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-orange-500" />
                    {t("catalog.labels.category")} {house.category}
                  </div>

                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-orange-500" />
                    {t("catalog.labels.floors")} {house.floors}
                  </div>

                  <div className="flex items-center gap-2">
                    <DoorOpen size={16} className="text-orange-500" />
                    {t("catalog.labels.rooms")} {house.rooms}
                  </div>

                </div>

                <Link 
                  to={`/details/${house.id}`} 
                  className="group mt-4 flex w-full items-center justify-center gap-2 border border-[#EFA35A]/30 bg-orange-50/50 py-3 text-sm font-medium text-[#EFA35A] transition-all duration-300 hover:border-[#EFA35A] hover:bg-[#EFA35A] hover:text-white"
                >
                  <span>{t("catalog.details")}</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
