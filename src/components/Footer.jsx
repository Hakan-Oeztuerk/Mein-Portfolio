import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="px-3 pb-10">
            <div className="polo-container">
                <div className="polo-panel px-6 py-7 md:px-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xl font-semibold text-white">Hakan Öztürk</p>
                            <p className="mt-1 text-sm text-white/55">Fullstack Entwickler</p>
                        </div>

                        <nav className="flex flex-wrap gap-5 text-sm text-white/70">
                            <a href="/#services" className="hover:text-white">Kompetenzen</a>
                            <Link to="/project" className="hover:text-white">Projekte</Link>
                            <Link to="/lebenslauf" className="hover:text-white">Lebenslauf</Link>
                            <Link to="/contact" className="hover:text-white">Kontakt</Link>
                        </nav>
                    </div>

                    <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
                        <p>© {new Date().getFullYear()} Hakan Öztürk</p>
                        <p>Built in React + Vite</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
