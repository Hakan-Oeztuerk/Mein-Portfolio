import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-black border-gray-800 text-white p-4 flex items-center">
            <h1 className="text-xl ml-40 font-bold text-cyan-400">HÖ</h1>

            <ul className="flex gap-40 ml-200">
                <li>
                    <Link to="/about" className="hover:text-cyan-400">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="/project" className="hover:text-cyan-400">
                        Projekte
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-cyan-400">
                        Kontakt
                    </Link>
                </li>
                 {/* <li>
                    <Link to="/contact" className="hover:text-cyan-400">
                        Lebenslauf
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
}

