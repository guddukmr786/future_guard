import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2C3E50",
    },
    secondary: {
      main: "#F39C12",
    },
  },
  typography: {
    h1: {
      fontFamily: '"Rajdhani", serif',
      fontSize: 100,
      fontWeight: 700,
      letterSpacing: 0.22,
      color: '#2C3E50',
      fontStyle: 'normal',
      lineHeight: 1
    },
    h2: {
      fontFamily: '"Rajdhani", serif',
      fontSize: 70,
      fontWeight: 700,
      letterSpacing: 0.22,
      color: '#2C3E50',
      fontStyle: 'normal',
      lineHeight: 1
    },
    h3: {
      fontFamily: '"Rajdhani", serif',
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: 0.22,
      color: '#FFFFFF',
      fontStyle: 'normal'
    },
    h4: {
      fontFamily: '"Rajdhani", serif',
      fontSize: 25,
      fontWeight: 600,
      letterSpacing: 0.22,
      color: '#2C3E50',
      fontStyle: 'normal'
    },
    h5: {
      fontFamily: '"Rajdhani", serif',
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: 0.22,
      color: '#2C3E50',
      fontStyle: 'normal'
    },
    h6: {
      fontFamily: '"Rajdhani", serif',
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0.22,
      color: '#FFFFFF',
      fontStyle: 'normal',
      lineHeight: 1
    }
  }
});