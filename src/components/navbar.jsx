import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-{#212121} text-white p-4 flex ml-40 items-center">
            <h1 className="text-xl font-bold text-cyan-400">HÖ</h1>

            <ul className="flex gap-20 ml-120">
                <li>
                    <Link to="/about" className="hover:text-cyan-400">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="hover:text-cyan-400">
                        Projekte
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-cyan-400">
                        Kontakt
                    </Link>
                </li>
                 <li>
                    <Link to="/contact" className="hover:text-cyan-400">
                        Lebenslauf
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

