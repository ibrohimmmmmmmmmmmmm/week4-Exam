import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function HomeSection2() {
  const { t } = useTranslation();
  const [active, setActive] = useState("all");

  const projects = [
    {
      title: t("home.section2.projects.silver"),
      type: "two",
      img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070",
    },
    {
      title: t("home.section2.projects.iq"),
      type: "town",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
    },
    {
      title: t("home.section2.projects.winter"),
      type: "two",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
    },
    {
      title: t("home.section2.projects.usadi"),
      type: "one",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    },
  ];

  const filters = [
    { key: "one", label: t("home.section2.filters.one") },
    { key: "two", label: t("home.section2.filters.two") },
    { key: "town", label: t("home.section2.filters.town") },
    { key: "all", label: t("home.section2.filters.all") },
  ];

  const filteredProjects =
    active === "all"
      ? projects
      : projects.filter((p) => p.type === active);

  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto mb-10">
        <h2 className="text-xl md:text-2xl font-semibold">
          {t("home.section2.title1")}{" "}
          <span className="text-[#EFA35A]">
            {t("home.section2.title2")}
          </span>
        </h2>

        <div className="flex flex-wrap gap-3 mt-6">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-4 py-2 border text-sm transition ${
                active === f.key
                  ? "bg-[#EFA35A] text-white border-[#EFA35A]"
                  : "border-gray-300 hover:border-[#EFA35A] hover:text-[#EFA35A]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-gray-600 text-sm border-b pb-3">
          {t("home.section2.subtitle")}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6">
        {filteredProjects.map((item, i) => (
          <div key={i} className="bg-white hover:shadow-lg transition">
            <img src={item.img} className="h-[220px] w-full object-cover" />
            <div className="p-4">
              <h3 className="font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="border border-[#EFA35A] px-6 py-2 text-[#EFA35A] hover:bg-[#EFA35A] hover:text-white transition">
          {t("home.section2.more")}
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto mt-16 relative">
        <div
          className="h-[220px] md:h-[260px] bg-cover bg-center flex items-center px-6 md:px-12 relative"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070)",
          }}
        >
          <div className="bg-black/60 absolute inset-0"></div>

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-4">
            <h3 className="text-white text-lg md:text-xl font-semibold flex-1">
              {t("home.section2.catalog1")}{" "}
              <span className="text-[#EFA35A]">
                {t("home.section2.catalog2")}
              </span>
            </h3>

            <input
              placeholder={t("home.section2.name")}
              className="px-4 py-2 bg-transparent border border-gray-300 text-white outline-none"
            />

            <input
              placeholder={t("home.section2.email")}
              className="px-4 py-2 bg-transparent border border-gray-300 text-white outline-none"
            />

            <button className="bg-[#EFA35A] px-6 py-2 text-white">
              {t("home.section2.download")}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-16">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          {t("home.section2.ipoteka1")}{" "}
          <span className="text-[#EFA35A]">
            {t("home.section2.ipoteka2")}
          </span>{" "}
          {t("home.section2.ipoteka3")}
        </h3>

        <p className="text-gray-600 text-sm mb-6">
          {t("home.section2.ipotekaDesc")}
        </p>
      </div>
    </section>
  );
}
