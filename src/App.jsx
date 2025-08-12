import { Routes, Route } from "react-router-dom";
import LandingPage from "./features/landing/pages/LandingPage";
import ServicesPage from "./features/services/pages/ServicesPage";
import AboutPage from "./features/about/pages/AboutPage";
import ContactPage from "./features/contact/pages/ContactPage";
import CareersPage from "./features/careers/pages/CareersPage";
import PrivacyPage from "./features/privacy/pages/PrivacyPage";
import TermsPage from "./features/terms/pages/TermsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}

export default App;
