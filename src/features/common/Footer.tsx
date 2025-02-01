import { Box, Container, Typography } from "@mui/material";

const Footer = () => (
  <Box component="footer" sx={{ backgroundColor: "primary.main", color: "white", py: 3, textAlign: "center" }}>
    <Container>
      <Typography variant="body1">&copy; {new Date().getFullYear()} Your Insurance Firm. All rights reserved.</Typography>
      <Typography variant="body2">Designed with care for your protection and peace of mind.</Typography>
    </Container>
  </Box>
);
export default Footer