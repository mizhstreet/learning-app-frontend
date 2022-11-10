import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
// import { Header } from "./components/header/Header";
import { MyCourse } from "./pages/MyCourse";
import theme from "./theme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyCourse />
    </ThemeProvider>
  );
};
export default App;
