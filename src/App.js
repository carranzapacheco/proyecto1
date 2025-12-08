import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NosotrosPage from "./pages/NosotrosPage";
import BeneficiosPage from "./pages/BeneficiosPage";
import ContactoPage from "./pages/ContactoPage";
import PlanesPage from "./pages/PlanesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/beneficios" element={<BeneficiosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/planes" element={<PlanesPage />} />
      </Routes>
    </Router>
  );
}
