import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import StoreSelectionPage from "./pages/store-selection-page";
import StandSelectionPage from "./pages/stand-selection-page";
import ItineraryPreviewPage from "./pages/itinerary-preview-page";

import CustomBackground from "./components/background/background";
import "./app.css";
import theme from "./themes/theme";

function App() {
  return (
    <CustomBackground>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stores" element={<StoreSelectionPage />} />
            <Route
              path="/stores/:storeId/stands"
              element={<StandSelectionPage />}
            />
            <Route
              path="/itinerary-preview"
              element={<ItineraryPreviewPage />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </CustomBackground>
  );
}

export default App;
