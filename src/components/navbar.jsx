import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname === "/about";

    return (
        <header className="sticky top-4 z-50 px-3">
            <div className="polo-container">
                <div className="polo-nav-shell flex items-center justify-between gap-4 px-4 py-3 md:px-6">
                    <Link to="/" className="text-2xl font-bold tracking-tight text-white/95">
                        Hakan Öztürk
                    </Link>

                    <nav className="hidden items-center gap-8 text-lg font-medium text-white/72 md:flex">
                        {isHome ? (
                            <a href="#services" className="hover:text-white">Kompetenzen</a>
                        ) : (
                            <Link to="/#services" className="hover:text-white">Kompetenzen</Link>
                        )}

                        <Link to="/project" className="hover:text-white">Projekte</Link>

                        <Link to="/lebenslauf" className="hover:text-white">Lebenslauf</Link>

                        <Link to="/contact" className="hover:text-white">Kontakt</Link>
                    </nav>

                </div>
            </div>
        </header>
    );
}
