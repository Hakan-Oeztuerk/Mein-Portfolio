import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.jsx';
import About from './pages/about.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import Lebenslauf from './pages/Lebenslauf.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lebenslauf" element={<Lebenslauf />} />
      </Routes>

      <Footer />
    </div>
  );
}
