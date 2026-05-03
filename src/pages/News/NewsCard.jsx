import { useTranslation } from "react-i18next";

export default function NewsCard({ card, isOpen, onToggle }) {
  const { t } = useTranslation();

  if (!card) return null; 

  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-md hover:shadow-xl transition rounded-xl overflow-hidden">
      <div className="lg:w-[45%] overflow-hidden">
        <img
          src={card.img}
          className="w-full h-[200px] md:h-[250px] object-cover hover:scale-105 transition"
        />
      </div>
      <div className="p-4 md:p-6">
        <h2 className="text-base md:text-lg font-semibold mb-2">
          {t(card.title)}
        </h2>

        <p className="text-xs md:text-sm text-gray-400 mb-2">
          🕒 {card.date}
        </p>

        <p className="text-gray-700 mb-2">
          {t(card.desc)}
        </p>

        {isOpen && (
          <p className="text-gray-600 mb-3">
            {t(card.full)}
          </p>
        )}

        <button
          onClick={onToggle}
          className="text-[#E9A85A] font-medium hover:underline"
        >
          {isOpen ? t("news.hide") : t("news.more")}
        </button>
      </div>
    </div>
  );
}
