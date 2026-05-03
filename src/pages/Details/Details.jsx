import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Home,
  LandPlot,
  Building2,
  Layers,
  DoorOpen,
  CheckCircle,
  Settings,
  Zap,
} from "lucide-react";

import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Select,
  MenuItem,
  Slider,
  FormControl,
  Breadcrumbs,
  Link,
  TextField,
} from "@mui/material";

import img1 from "./Rectangle 122 (6).png";
import img2 from "./Rectangle 122 (7).png";
import img3 from "./Rectangle 122 (8).png";
import img4 from "./Rectangle 122 (9).png";
import img5 from "./Rectangle 122 (10).png";
import img6 from "./Rectangle 122 (11).png";

export default function Details() {
  const { t } = useTranslation();
  const { todosId } = useParams();

  const [house, setHouse] = useState(null);
  const [activeImg, setActiveImg] = useState("");

  const houses = [
    { id: 1, title: "Win-1", price: "13 800 000 ₽", img: img1, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 2, rooms: 5 },
    { id: 2, title: "Win-2", price: "13 800 000 ₽", img: img2, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 2, rooms: 5 },
    { id: 3, title: "Win-3", price: "13 800 000 ₽", img: img3, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 2, rooms: 5 },
    { id: 4, title: "Win-4", price: "13 800 000 ₽", img: img4, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 1, rooms: 4 },
    { id: 5, title: "Win-5", price: "13 800 000 ₽", img: img5, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 1, rooms: 5 },
    { id: 6, title: "Win-6", price: "13 800 000 ₽", img: img6, area: "139,8 м2", land: "5,1 сот.", category: "ИЖС", floors: 2, rooms: 3 },
  ];

  useEffect(() => {
    const found = houses.find((h) => h.id === Number(todosId));
    setHouse(found);
    setActiveImg(found?.img);
  }, [todosId]);

  if (!house) return <Typography p={4}>{t("loading")}</Typography>;

  const iconStyles = { color: "#EFA35A", size: 24 };

  return (
    <Box sx={{ background: "#f8f9fa", py: 4 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>

        <Card elevation={0} sx={{ borderRadius: 0, mb: 4, background: "white" }}>
          <Grid container>
            
            <Grid item xs={12} md={7}>
              <Box sx={{ p: 2 }}>
                <Box
                  component="img"
                  src={activeImg}
                  sx={{ width: "100%", height: 450, objectFit: "cover" }}
                />
                <Box sx={{ display: "flex", gap: 1, mt: 1, overflowX: "auto" }}>
                  {houses.map((h, i) => (
                    <Box
                      key={i}
                      component="img"
                      src={h.img}
                      onClick={() => setActiveImg(h.img)}
                      sx={{
                        width: 80,
                        height: 60,
                        objectFit: "cover",
                        cursor: "pointer",
                        opacity: activeImg === h.img ? 1 : 0.6,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                  {t("houseTitle")} <br /> {t("area")} {house.area}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Home {...iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                      {t("houseArea")} - {house.area}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <LandPlot {...iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                      {t("landArea")} - {house.land}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Building2 {...iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                      {t("category")} - {house.category}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Layers {...iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                      {t("floors")} - {house.floors}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <DoorOpen {...iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                      {t("rooms")} - {house.rooms}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h6" sx={{ mb: 3 }}>
                  {t("price")}{" "}
                  <span style={{ color: "#EFA35A", fontWeight: 700 }}>
                    {house.price}
                  </span>
                </Typography>

                <Button fullWidth variant="contained" sx={{ py: 1.5, background: "#EFA35A" }}>
                  {t("consult")}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ height: "100%", p: 2, width:"700px" }}>
              
              <Typography variant="h6" fontWeight={700}>
                {t("features")}
              </Typography>

              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                <li>✔ {t("bedrooms")}</li>
                <li>✔ {t("bathrooms")}</li>
                <li>✔ {t("kitchen")}</li>
                <li>✔ {t("wardrobe")}</li>
                <li>✔ {t("terrace")}</li>
                <li>✔ {t("mansard")}</li>
                <li>✔ {t("parking")}</li>
              </Box>

              <Typography variant="h6" fontWeight={700}>
                {t("characteristics")}
              </Typography>

              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                <li>✔ {t("walls")}</li>
                <li>✔ {t("thickness")}</li>
                <li>✔ {t("roof")}</li>
                <li>✔ {t("floorsConcrete")}</li>
                <li>✔ {t("stairs")}</li>
                <li>✔ {t("finish")}</li>
              </Box>

              <Typography variant="h6" fontWeight={700}>
                {t("communications")}
              </Typography>

              <Box component="ul" sx={{ pl: 2 }}>
                <li>✔ {t("gas")}</li>
                <li>✔ {t("water")}</li>
                <li>✔ {t("electricity")}</li>
                <li>✔ {t("sewer")}</li>
                <li>✔ {t("heating")}</li>
              </Box>

            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ p: 4,maxWidth: 440,
      mx: "auto" }}>
              <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 4 }}>
                {t("mortgagee")}
              </Typography>

              <Typography variant="caption">{t("propertyType")}</Typography>
              <Select fullWidth size="small">
                <MenuItem value="all">{t("all")}</MenuItem>
              </Select>

              <Typography variant="caption">{t("project")}</Typography>
              <Select fullWidth size="small">
                <MenuItem value="all">{t("all")}</MenuItem>
              </Select>

              <Typography variant="caption">{t("mortgageType")}</Typography>
              <Select fullWidth size="small">
                <MenuItem value="all">{t("all")}</MenuItem>
              </Select>

              <Typography variant="caption">{t("price")}</Typography>
              <TextField fullWidth size="small" value="13 800 000 ₽" />
              <Slider defaultValue={13800000} />

              <Typography variant="caption">{t("firstPay")}</Typography>
              <TextField fullWidth size="small" value="2 000 000 ₽" />
              <Slider defaultValue={2000000} />

              <Typography variant="caption">{t("monthly")}</Typography>
              <TextField fullWidth size="small" value="60 000 ₽" />
              <Slider defaultValue={60000} />

              <Button fullWidth variant="contained" sx={{ background: "#EFA35A" }}>
                {t("calculate")}
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
