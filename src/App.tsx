import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButtton";

import Home from "./pages/Home/Home";
import RoomsPage from "./pages/Rooms/Room";
import RestaurantPage from "./pages/Restaurant/Restaurant";
import GalleryPage from "./pages/Gallery/Gallery";
import LocationPage from "./pages/Location/Location";
import ContactPage from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        {/* Single Header Component as requested */}
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer & WhatsApp Floating Action */}
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}

export default App;