import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./features/common/Navbar";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import ServicesPage from "./pages/Services.page";
import ContactPage from "./pages/Contact.page";
import Footer from "./features/common/Footer";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;