import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };
  return (
    <FormControl
      sx={{
        width: "130px",
        "& .MuiInputBase-root": {
          height: "42px",
          backgroundColor: "rgba(28, 28, 28, 0.85)",
          backdropFilter: "blur(10px)",
          color: "#FFFFFF",
          borderRadius: "12px",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.05em",
          border: "1px solid rgba(252, 213, 76, 0.25)",
          transition: "all 0.3s ease",

          "&:hover": {
            borderColor: "#FCD54C",
            boxShadow: "0 0 15px rgba(252, 213, 76, 0.2)",
          },
          "&.Mui-focused": {
            borderColor: "#FCD54C",
            boxShadow: "0 0 20px rgba(252, 213, 76, 0.3)",
          },
          "& fieldset": {
            border: "none",
          },
        },
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          gap: "10px",
          paddingRight: "30px !important",
        },
      }}
    >
      <Select
        value={i18n.language}
        onChange={(e) => changeLang(e.target.value)}
        IconComponent={() => (
          <ChevronDown
            size={14}
            color="#FCD54C"
            style={{ marginRight: "8px" }}
          />
        )}
        renderValue={(selected) => (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              className={`fi fi-${
                selected === "en" ? "gb" : "ru"
              }`}
              style={{ width: "20px", height: "14px", borderRadius: "2px" }}
            ></span>
            <span>{selected.toUpperCase()}</span>
          </div>
        )}
        MenuProps={{
          PaperProps: {
            sx: {
              mt: 1.5,
              backgroundColor: "#1a1a1a",
              borderRadius: "12px",
              border: "1px solid rgba(252, 213, 76, 0.2)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
              "& .MuiMenuItem-root": {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                padding: "10px 16px",
                margin: "4px 8px",
                borderRadius: "8px",
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: "rgba(252, 213, 76, 0.1)",
                  color: "#FCD54C",
                },
                "&.Mui-selected": {
                  backgroundColor: "rgba(252, 213, 76, 0.15)",
                  color: "#FCD54C",
                },
              },
            },
          },
        }}
      >
        <MenuItem value="en">
          <span className="fi fi-gb" style={{ width: "20px", height: "14px" }}></span>
          ENG
        </MenuItem>
        <MenuItem value="ru">
          <span className="fi fi-ru" style={{ width: "20px", height: "14px" }}></span>
          RUS
        </MenuItem>
      </Select>
    </FormControl>
  );
}
