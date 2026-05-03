import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Drawer,
  IconButton,
  Collapse,
} from "@mui/material";
import { Menu as MenuIcon, X, ChevronDown, PhoneCall, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import img from "../../assets/windom logo 4 (2).png";

export default function Header() {
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(null);
  const [langAnchor, setLangAnchor] = useState(null);

  const open = Boolean(anchorEl);
  const openLang = Boolean(langAnchor);

  const handleOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  const toggleMobile = (menu) => {
    setOpenMobile(openMobile === menu ? null : menu);
  };

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangAnchor(null);
  };

  return (
    <header className="w-full bg-[#E3E3E3] sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-4 bg-white/80 backdrop-blur-md">
        <Link to="/">
          <img src={img} alt="logo" className="w-[70px] md:w-[100px] lg:w-[50px]" />
        </Link>
        <div className="hidden lg:flex gap-10 items-center text-black font-medium">

          <Button onClick={(e) => handleOpen(e, "projects")} sx={{ color: "#000" }}>
            {t("projects")} ▾
          </Button>

          <Button onClick={(e) => handleOpen(e, "houses")} sx={{ color: "#000" }}>
            {t("houses")} ▾
          </Button>

          <NavLink to="/ipoteka">{t("ipoteka")}</NavLink>

          <Button onClick={(e) => handleOpen(e, "about")} sx={{ color: "#000" }}>
            {t("about")} ▾
          </Button>

          <NavLink to="/contact">{t("contact")}</NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-5">

          <Button
            onClick={(e) => setLangAnchor(e.currentTarget)}
            sx={{
              border: "1px solid #ddd",
              color: "#000",
              px: 2,
              py: 0.5,
              minWidth: "70px",
            }}
          >
            {i18n.language === "ru" ? "🇷🇺 RU" : "🇬🇧 EN"}
          </Button>

          <Menu
            anchorEl={langAnchor}
            open={openLang}
            onClose={() => setLangAnchor(null)}
          >
            <MenuItem onClick={() => changeLang("ru")}>🇷🇺 Русский</MenuItem>
            <MenuItem onClick={() => changeLang("en")}>🇬🇧 English</MenuItem>
          </Menu>
          <div className="group flex items-center gap-2 cursor-pointer pl-10  ">
  <div className="flex h-10   items-center justify-center rounded-full bg-gray-50 transition-colors group-hover:bg-[#EFA35A]/10">
    <Phone size={18} className="text-gray-400 transition-colors group-hover:text-[#EFA35A]" strokeWidth={1.5} />
  </div>
  
  <div className="flex flex-col">
    <span className="text-sm font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-[#EFA35A]">
      +7 (962) 555-25-25
    </span>
  </div>
</div>
          
          
          <NavLink to="/putyourdetails" className="border border-[#EFA35A] px-4 py-2 hover:bg-[#EFA35A] hover:text-white transition">
            {t("call")}
          </NavLink>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <Button onClick={(e) => setLangAnchor(e.currentTarget)}>
            {i18n.language === "ru" ? "🇷🇺" : "🇬🇧"}
          </Button>

          <IconButton onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
        <Menu
          anchorEl={langAnchor}
          open={openLang}
          onClose={() => setLangAnchor(null)}
        >
          <MenuItem onClick={() => changeLang("ru")}>🇷🇺 Русский</MenuItem>
          <MenuItem onClick={() => changeLang("en")}>🇬🇧 English</MenuItem>
        </Menu>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>

          {menuType === "projects" && (
            <>
              <MenuItem component={Link} to="/silvervillage" onClick={handleClose}>
                {t("menu.projects.silver")}
              </MenuItem>
              <MenuItem component={Link} to="/iqclub" onClick={handleClose}>
                {t("menu.projects.iq")}
              </MenuItem>
              <MenuItem component={Link} to="/usadi" onClick={handleClose}>
                {t("menu.projects.usadi")}
              </MenuItem>
              <MenuItem component={Link} to="/winterhill" onClick={handleClose}>
                {t("menu.projects.winter")}
              </MenuItem>
              <MenuItem component={Link} to="/konstantinovka" onClick={handleClose}>
                {t("menu.projects.konstantinovka")}
              </MenuItem>
            </>
          )}

          {menuType === "houses" && (
            <>
              <MenuItem component={Link} to="/singlefloor" onClick={handleClose}>
                {t("menu.houses.one")}
              </MenuItem>
              <MenuItem component={Link} to="/multifloor" onClick={handleClose}>
                {t("menu.houses.two")}
              </MenuItem>
              <MenuItem component={Link} to="/townhouse" onClick={handleClose}>
                {t("menu.houses.town")}
              </MenuItem>
            </>
          )}

          {menuType === "about" && (
            <>
              <MenuItem component={Link} to="/comand" onClick={handleClose}>
                {t("menu.about.team")}
              </MenuItem>
              <MenuItem component={Link} to="/aboutUs" onClick={handleClose}>
                {t("menu.about.media")}
              </MenuItem>
              <MenuItem component={Link} to="/news" onClick={handleClose}>
                {t("menu.about.news")}
              </MenuItem>
            </>
          )}
        </Menu>

        <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <div className="w-[300px] p-6 flex flex-col gap-4">

            <div className="flex justify-end">
              <IconButton onClick={() => setMobileOpen(false)}>
                <X />
              </IconButton>
            </div>

            <div className="border-b pb-3 flex gap-2">
              <button
                onClick={() => changeLang("ru")}
                className={`px-3 py-1 border ${i18n.language === "ru" ? "bg-[#EFA35A] text-white" : ""}`}
              >
                🇷🇺 RU
              </button>
              <button
                onClick={() => changeLang("en")}
                className={`px-3 py-1 border ${i18n.language === "en" ? "bg-[#EFA35A] text-white" : ""}`}
              >
                🇬🇧 EN
              </button>
            </div>

            <div>
              <div onClick={() => toggleMobile("projects")} className="flex justify-between py-2 cursor-pointer">
                <span>{t("projects")}</span>
                <ChevronDown className={`${openMobile === "projects" ? "rotate-180" : ""}`} />
              </div>

              <Collapse in={openMobile === "projects"}>
                <div className="pl-4 flex flex-col gap-2">
                  <NavLink to="/silvervillage" onClick={() => setMobileOpen(false)}>{t("menu.projects.silver")}</NavLink>
                  <NavLink to="/iqclub" onClick={() => setMobileOpen(false)}>{t("menu.projects.iq")}</NavLink>
                  <NavLink to="/usadi" onClick={() => setMobileOpen(false)}>{t("menu.projects.usadi")}</NavLink>
                  <NavLink to="/winterhill" onClick={() => setMobileOpen(false)}>{t("menu.projects.winter")}</NavLink>
                </div>
              </Collapse>
            </div>

            <div>
              <div onClick={() => toggleMobile("houses")} className="flex justify-between py-2 cursor-pointer">
                <span>{t("houses")}</span>
                <ChevronDown className={`${openMobile === "houses" ? "rotate-180" : ""}`} />
              </div>

              <Collapse in={openMobile === "houses"}>
                <div className="pl-4 flex flex-col gap-2">
                  <NavLink to="/singlefloor" onClick={() => setMobileOpen(false)}>{t("menu.houses.one")}</NavLink>
                  <NavLink to="/multifloor" onClick={() => setMobileOpen(false)}>{t("menu.houses.two")}</NavLink>
                  <NavLink to="/townhouse" onClick={() => setMobileOpen(false)}>{t("menu.houses.town")}</NavLink>
                  <NavLink to="/allhouses" onClick={() => setMobileOpen(false)}>{t("menu.houses.all")}</NavLink>
                </div>
              </Collapse>
            </div>

            <NavLink to="/ipoteka" onClick={() => setMobileOpen(false)}>
              {t("ipoteka")}
            </NavLink>

            {/* ABOUT */}
            <div>
              <div onClick={() => toggleMobile("about")} className="flex justify-between py-2 cursor-pointer">
                <span>{t("about")}</span>
                <ChevronDown className={`${openMobile === "about" ? "rotate-180" : ""}`} />
              </div>

              <Collapse in={openMobile === "about"}>
                <div className="pl-4 flex flex-col gap-2">
                  <NavLink to="/comand" onClick={() => setMobileOpen(false)}>{t("menu.about.team")}</NavLink>
                  <NavLink to="/aboutUs" onClick={() => setMobileOpen(false)}>{t("menu.about.media")}</NavLink>
                  <NavLink to="/news" onClick={() => setMobileOpen(false)}>{t("menu.about.news")}</NavLink>
                </div>
              </Collapse>
            </div>

            <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
              {t("contact")}
            </NavLink>

            <div className="mt-6 border-t pt-4">
              <p className="text-sm mb-3">+7 (962) 555-25-25</p>
              <button className="w-full bg-[#EFA35A] text-white py-2">
                {t("call")}
              </button>
            </div>

          </div>
        </Drawer>

      </div>
    </header>
  );
}
