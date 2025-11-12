import HeroWithVideo from './pages/HeroWithVideo';
import {BrowserRouter as Router, Routes,Route }from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

   export default function App() {
  

  return (
    <Router>
   < HeroWithVideo />
   <div className="bg-[#121212] min-h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </div>
    
    
    </Router>
  );
   
  
}

