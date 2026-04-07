import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StoresPage from "./pages/StoresPage";
import StoreDetailPage from "./pages/StoreDetailPage";
import EventsPage from "./pages/EventsPage";
import NewsSpotlightPage from "./pages/NewsSpotlightPage";
import PromotionsOffersPage from "./pages/PromotionsOffersPage";
// import EnvironmentalSustainabilityPage from "./pages/EnvironmentalSustainabilityPage";
import HappeningsPage from "./pages/HappeningsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/stores/:storeId" element={<StoreDetailPage />} />
          <Route path="/happenings" element={<HappeningsPage />} />
          <Route path="/happenings/events" element={<EventsPage />} />
        <Route path="/happenings/news-spotlight" element={<NewsSpotlightPage />} />
        <Route path="/happenings/promotions-offers" element={<PromotionsOffersPage />} />
        {/* <Route
          path="/happenings/environmental-sustainability"
          element={<EnvironmentalSustainabilityPage />}
        /> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;