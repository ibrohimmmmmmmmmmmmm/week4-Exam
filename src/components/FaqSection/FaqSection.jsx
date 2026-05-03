import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import "animate.css";

export default function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const data = [
    {
      q: t("faq.q1"),
      a: t("faq.a1"),
    },
    {
      q: t("faq.q2"),
      a: t("faq.a2"),
    },
    {
      q: t("faq.q3"),
      a: t("faq.a3"),
    },
    {
      q: t("faq.q4"),
      a: t("faq.a4"),
    },
  ];

  return (
    <Box sx={{ background: "#f5f5f5", py: { xs: 7, md: 12 } }}>
      <Container maxWidth="lg">

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 3,
            mb: 6,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "26px", md: "38px" },
              fontWeight: 700,
            }}
          >
            {t("faq.title1")}{" "}
            <Box component="span" sx={{ color: "#E59B52" }}>
              {t("faq.title2")}
            </Box>
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E59B52",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontSize: "15px",
              borderRadius: "8px",
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "#d4883f" },
            }}
          >
            {t("faq.btn")}
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" gap={3}>
          {data.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <Box
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                sx={{
                  background: "#eeeeee",
                  borderRadius: "14px",
                  px: { xs: 2.5, md: 3.5 },
                  py: { xs: 2.5, md: 3 },
                  cursor: "pointer",
                  transition: "0.3s",
                  mb: 4,
                  "&:hover": {
                    background: "#e4e4e4",
                  },
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  gap={2}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "18px" },
                      fontWeight: 600,
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {item.q}
                  </Typography>

                  <ChevronDown
                    size={22}
                    style={{
                      marginTop: "2px",
                      transition: "0.3s",
                      transform: isOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </Box>

                {isOpen && (
                  <Box
                    className="animate__animated animate__fadeInUp"
                    sx={{ mt: 2.5 }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "15px" },
                        color: "#555",
                        lineHeight: 1.7,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.a}
                    </Typography>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
}
