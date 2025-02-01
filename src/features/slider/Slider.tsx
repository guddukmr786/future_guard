import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import banner1 from "../../assets/banner/banner1.webp";
import banner2 from "../../assets/banner/banner2.webp";
import banner3 from "../../assets/banner/banner3.webp";

const images = [banner1, banner2, banner3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "50vh", sm: "60vh", md: "70vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={images[currentIndex]}
          alt="Banner Image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Container>
  );
};
export default Slider;