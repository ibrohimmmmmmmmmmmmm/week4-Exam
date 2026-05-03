import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ background: "#f5f5f5", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">

        {/* TITLE */}
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "28px" },
            fontWeight: 600,
            mb: 4,
          }}
        >
          <span style={{ color: "#E59B52" }}>ВИДЕО</span> О ПРОЕКТЕ
        </Typography>

        {/* VIDEO PREVIEW */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "220px", sm: "320px", md: "500px" },
            borderRadius: "8px",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* DARK OVERLAY */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.2)",
            }}
          />

          {/* PLAY BUTTON */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 60, md: 80 },
              height: { xs: 60, md: 80 },
              borderRadius: "50%",
              border: "2px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
              transition: "0.3s",
              "&:hover": {
                transform: "translate(-50%, -50%) scale(1.1)",
                background: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <Play size={28} color="white" fill="white" />
          </Box>
        </Box>

        {/* MODAL VIDEO */}
        {open && (
          <Box
            onClick={() => setOpen(false)}
            sx={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
              px: 2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "900px",
                height: { xs: "220px", md: "500px" },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1"
  title="Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ border: "none" }}
/>

            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
