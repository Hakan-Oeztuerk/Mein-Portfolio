import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-black border-gray-800 text-white p-4 flex items-center">
      <div>
        <h1 className="text-xl ml-40 font-bold text-cyan-400">HÖ</h1>
      </div>

      <ul className="flex justify-center items-center space-x-8 ml-auto mr-40 text-lg">
        <li>
          <Link to="/about" className="hover:text-cyan-400">Über mich</Link>
        </li>
        <li>
          <Link to="/project" className="hover:text-cyan-400">Projekte</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-cyan-400">Kontakt</Link>
        </li>
        <li>
          <Link to="/Lebenslauf" className="hover:text-cyan-400">Zerifikat</Link>
        </li>
        <DarkModeToggle />
      </ul>
    </nav>
  );
}
