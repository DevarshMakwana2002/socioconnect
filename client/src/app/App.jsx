import { BrowserRouter } from "react-router-dom";
import ModuleRoutes from "./routes/app/ModuleRoutes";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "../theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ModuleRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
