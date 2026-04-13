import { Link } from "react-router-dom";
import skills from "../data/MeinProfil.json";

const processSteps = [
    {
        title: "Strukturierte Umsetzung",
        text: "Tasks werden in klare Arbeitspakete zerlegt und priorisiert umgesetzt.",
    },
    {
        title: "Saubere Architektur",
        text: "Komponenten, APIs und Datenmodelle bleiben wartbar und nachvollziehbar.",
    },
    {
        title: "Teamorientiertes Arbeiten",
        text: "Klare Kommunikation, dokumentierte Entscheidungen und verlässliche Übergaben.",
    },
    {
        title: "Qualitätsfokus",
        text: "Tests, Reviews und Deployment-Standards für stabile Releases.",
    },
];

const services = [
    {
        title: "Frontend Engineering",
        text: "React, Next.js und TypeScript für performante, wartbare und zugängliche Interfaces.",
    },
    {
        title: "Backend & Datenbank",
        text: "Express APIs, Prisma und PostgreSQL mit klarer Struktur und stabilen Datenflüssen.",
    },
    {
        title: "Deployment & Workflow",
        text: "GitHub, Vercel, Docker Compose und nachvollziehbare Entwicklungsprozesse.",
    },
];

function SkillGrid({ title, items }) {
    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                    <article key={item.name} className="polo-panel px-5 py-5">
                        <h4 className="text-base font-semibold text-white md:text-lg">{item.name}</h4>
                        <p className="polo-muted mt-2 text-sm leading-relaxed">{item.description}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default function SkillsSection() {
    return (
        <div className="space-y-20 pb-20">
            <section id="services" className="px-3">
                <div className="polo-container space-y-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">Kompetenzen</p>
                        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Technische Schwerpunkte</h2>
                        <p className="polo-muted mt-3 max-w-3xl text-base leading-relaxed md:text-lg">
                            Die wichtigsten Fähigkeiten für eine Fullstack-Entwicklerrolle im Produktteam.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {services.map((service) => (
                            <article key={service.title} className="service-card p-6">
                                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/78">{service.text}</p>
                            </article>
                        ))}
                    </div>

                    <Link to="/contact" className="polo-btn-dark">
                        Kontakt aufnehmen
                    </Link>
                </div>
            </section>

            <section className="px-3">
                <div className="polo-container space-y-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">Skills</p>
                        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Technische Skill-Übersicht</h2>
                    </div>

                    <SkillGrid title="Kernkompetenzen" items={skills.coreSkills} />
                    <SkillGrid title="Tools im Alltag" items={skills.toolsDaily} />
                    <SkillGrid title="Aktuell in Vertiefung" items={skills.currentlyLearning} />
                </div>
            </section>

            <section className="px-3">
                <div className="polo-container space-y-5">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">Arbeitsweise</p>
                        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">So arbeite ich im Team</h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {processSteps.map((step, index) => (
                            <article key={step.title} className="polo-panel px-5 py-5">
                                <p className="text-2xl font-semibold text-white/45">{index + 1}</p>
                                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                                <p className="polo-muted mt-2 text-sm leading-relaxed">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
