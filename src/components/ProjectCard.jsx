import TCProject from "../assets/TC-Project.png";
import TCPrototyp from "../assets/TC-Prototyp.png";
import TCCaseStudy from "../assets/TC-CaseStudy.png";
import WissKickDashboard from "../assets/wisskick-dashboard.png";
import WissKickNeueKarte from "../assets/wisskick-neue-karte.png";
import WissKickMeineKarten from "../assets/wisskick-meine-karten.png";

const projects = [
    {
        title: "TuningConnect",
        summary: "Konzept, UX/UI und klickbarer Prototyp für ein fokussiertes Automotive-Produkt.",
        role: "Produktkonzept, UX/UI, Prototyping",
        stack: ["Figma", "Framer", "Design System", "UX Research"],
        outcome: "Saubere User-Flows und validierter Feature-Fokus als Grundlage für technische Umsetzung.",
        images: [TCProject, TCPrototyp, TCCaseStudy],
        link: "https://www.behance.net/gallery/238838695/TuningConnect-Case-Study",
        ctaLabel: "Case Study öffnen",
    },
    {
        title: "WissKick",
        summary: "Lernplattform mit Dashboard, Study-Mode und strukturierter Kartenverwaltung.",
        role: "Fullstack Entwicklung",
        stack: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
        outcome: "Durchgängiger Workflow von Auth, Lernkarten und Dashboard mit klarer UI-Struktur.",
        images: [WissKickDashboard, WissKickNeueKarte, WissKickMeineKarten],
        link: "https://www.wisskick.com",
        ctaLabel: "Webapp öffnen",
    },
];

export default function ProjectCard() {
    return (
        <section className="px-3 pb-20">
            <div className="polo-container space-y-6">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">Projekte</p>
                    <h1 className="mt-2 text-4xl font-semibold text-white md:text-6xl">Ausgewählte Case Studies</h1>
                    <p className="polo-muted mt-4 text-lg md:text-xl">
                        Relevante Projektarbeiten mit Fokus auf technische Umsetzung, Produktdenken und saubere Architektur.
                    </p>
                </div>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <article key={project.title} className="polo-panel p-6 md:p-8">
                            <div className="flex flex-wrap items-end justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-white md:text-3xl">{project.title}</h2>
                                    <p className="polo-muted mt-2 max-w-2xl text-sm md:text-lg">{project.summary}</p>
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="polo-btn-dark"
                                >
                                    {project.ctaLabel}
                                    <span aria-hidden>➜</span>
                                </a>
                            </div>

                            <div className="mt-5 grid gap-4 md:grid-cols-3">
                                <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-4">
                                    <p className="text-xs uppercase tracking-[0.12em] text-white/60">Rolle</p>
                                    <p className="mt-2 text-sm text-white/90 md:text-base">{project.role}</p>
                                </div>

                                <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 md:col-span-2">
                                    <p className="text-xs uppercase tracking-[0.12em] text-white/60">Stack</p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {project.stack.map((item) => (
                                            <span key={item} className="polo-chip px-3 py-1 text-xs text-white/85 md:text-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 rounded-2xl border border-white/12 bg-white/[0.03] p-4">
                                <p className="text-xs uppercase tracking-[0.12em] text-white/60">Ergebnis</p>
                                <p className="mt-2 text-sm text-white/90 md:text-base">{project.outcome}</p>
                            </div>

                            <div className="mt-7 grid gap-4 md:grid-cols-3">
                                {project.images.map((image, index) => (
                                    <a
                                        key={`${project.title}-${index}`}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="polo-grid-card polo-grid-card-contain h-56 md:h-64"
                                    >
                                        <img src={image} alt={`${project.title} ${index + 1}`} />
                                    </a>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
