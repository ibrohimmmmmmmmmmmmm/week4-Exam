import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../../assets/windom logo 3 (2).png";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#2f2f2f] text-white mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="hidden md:block">
          <h3 className="text-sm font-bold mb-4 border-b border-[#FCD54C] inline-block pb-1">
            {t("footer.about")}
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/">{t("footer.home")}</Link></li>
            <li><Link to="/about/team">{t("footer.team")}</Link></li>
            <li><Link to="/about/media">{t("footer.media")}</Link></li>
            <li><Link to="/about/reviews">{t("footer.reviews")}</Link></li>
            <li><Link to="/about/news">{t("footer.news")}</Link></li>
            <li><Link to="/contact">{t("footer.contact")}</Link></li>
          </ul>

          <p className="text-xs text-gray-400 mt-6">
            {t("footer.policy")}
          </p>
        </div>

        {/* PROJECTS */}
        <div className="hidden md:block">
          <h3 className="text-sm font-bold mb-4 border-b border-[#FCD54C] inline-block pb-1">
            {t("footer.projects")}
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/silvervillage">{t("footer.project1")}</Link></li>
            <li><Link to="/iqclub">{t("footer.project2")}</Link></li>
            <li><Link to="/projects">{t("footer.allProjects")}</Link></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h3 className="text-sm font-bold mb-4 border-b border-[#FCD54C] inline-block pb-1">
            {t("footer.ipoteka")}
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/ipoteka">{t("footer.ipoteka1")}</Link></li>
            <li><Link to="/ipoteka/family">{t("footer.ipoteka2")}</Link></li>
            <li><Link to="/ipoteka/military">{t("footer.ipoteka3")}</Link></li>
            <li><Link to="/ipoteka/support">{t("footer.ipoteka4")}</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start lg:items-end gap-5">
          <img src={logo} alt="logo" className="w-[140px]" />
          <div className="flex gap-3">
            <div className="p-2 border border-gray-500 hover:border-[#FCD54C] hover:text-[#FCD54C] cursor-pointer transition">
              <FaYoutube />
            </div>
            <div className="p-2 border border-gray-500 hover:border-[#FCD54C] hover:text-[#FCD54C] cursor-pointer transition">
              <FaFacebookF />
            </div>
            <div className="p-2 border border-gray-500 hover:border-[#FCD54C] hover:text-[#FCD54C] cursor-pointer transition">
              <FaInstagram />
            </div>
            <div className="p-2 border border-gray-500 hover:border-[#FCD54C] hover:text-[#FCD54C] cursor-pointer transition">
              <FaLinkedinIn />
            </div>
          </div>
          <div className="border border-gray-500 px-4 py-2 text-sm text-gray-300">
            windom.kzn@gmail.com
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs pb-6">
        © 2026 Windom. {t("footer.rights")}
      </div>
    </footer>
  );
}
