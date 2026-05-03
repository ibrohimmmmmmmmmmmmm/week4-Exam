import { useState } from "react";
import { useTranslation } from "react-i18next";
import NewsCard from "./NewsCard";
import { allCards } from "./newsData";

export default function News() {
  const { t } = useTranslation();

  const [activeYear, setActiveYear] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [openId, setOpenId] = useState(null);

  const cardsPerPage = 4;

  const filtered =
    activeYear === "all"
      ? allCards
      : allCards.filter((c) => c.year === activeYear);

  const totalPages = Math.ceil(filtered.length / cardsPerPage);
  const start = (currentPage - 1) * cardsPerPage;
  const current = filtered.slice(start, start + cardsPerPage);

  const years = ["all", 2017, 2018, 2019, 2020, 2021, 2022, 2023];

  return (
    <div className="w-[92%] max-w-[1200px] m-auto mt-10 md:mt-16">

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        {t("news.title")}
      </h1>

      {/* FILTER */}
      <div className="flex gap-2 md:gap-3 mb-8 flex-wrap">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => {
              setActiveYear(year);
              setCurrentPage(1);
              setOpenId(null);
            }}
            className={`px-3 md:px-4 py-1.5 md:py-2 border ${
              activeYear === year
                ? "bg-[#E9A85A] text-white"
                : ""
            }`}
          >
            {year === "all" ? t("news.all") : year}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="flex flex-col gap-6 md:gap-8">
        {current.map((card) => (
          <NewsCard
            key={card.id}
            card={card}
            isOpen={openId === card.id}
            onToggle={() =>
              setOpenId(openId === card.id ? null : card.id)
            }
          />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-10 flex-wrap">
        <button
          onClick={() =>
            setCurrentPage((p) => (p > 1 ? p - 1 : p))
          }
          className="px-3 py-1 border"
        >
          {t("news.prev")}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border ${
              currentPage === i + 1
                ? "bg-[#E9A85A] text-white"
                : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((p) =>
              p < totalPages ? p + 1 : p
            )
          }
          className="px-3 py-1 border"
        >
          {t("news.next")}
        </button>
      </div>
    </div>
  );
}
