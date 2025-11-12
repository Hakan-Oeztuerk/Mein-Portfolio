
import { Routes,Route }from "react-router-dom";

import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
   export default function App() {
  

  return (
  
      
  
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/About" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
 
  );
   
  
}

