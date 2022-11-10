import { red, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [""].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: grey[900],
    },
    body1: {
      fontSize: "1rem",
      color: grey[700],
    },
  },
});

export default theme;
