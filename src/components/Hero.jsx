import WissKickDashboard from "../assets/wisskick-dashboard.png";
import TCProject from "../assets/TC-Project.png";
import Profil from "../assets/Profil.jpg";
import skills from "../data/MeinProfil.json";

export default function Hero() {
    const profileTags = [...skills.coreSkills, ...skills.toolsDaily]
        .map((item) => item.name)
        .slice(0, 11);

    return (
        <section id="hero-section" className="px-3 pb-12 pt-8 md:pt-12">
            <div className="polo-container">
                <div className="polo-panel polo-card-shadow relative overflow-hidden px-6 py-10 md:px-10 md:py-12">
                    <div className="portfolite-smoke" />

                    <div className="relative mt-2 grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                        <div className="flex w-full max-w-[360px] flex-col items-start">
                            <div className="w-full overflow-hidden rounded-2xl border border-white/18 bg-[#0b1422]/95 p-2 shadow-2xl">
                                <img
                                    src={Profil}
                                    alt="Profilfoto von Hakan Öztürk"
                                    className="h-auto w-full rounded-xl object-contain"
                                />
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <a
                                href="https://www.wisskick.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="polo-grid-card polo-grid-card-contain h-72 md:h-[340px]"
                            >
                                <img src={WissKickDashboard} alt="WissKick Dashboard" />
                            </a>

                            <a
                                href="https://www.behance.net/gallery/238838695/TuningConnect-Case-Study"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="polo-grid-card polo-grid-card-contain h-72 md:h-[340px]"
                            >
                                <img src={TCProject} alt="TuningConnect" />
                            </a>
                        </div>
                    </div>

                    <div className="relative mt-10 w-full">
                        <div className="polo-panel polo-panel-no-border grid gap-6 px-6 py-8 md:grid-cols-[0.85fr_1.15fr] md:px-8">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">Mein Profil</p>
                                <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">Hakan Öztürk, Fullstack Entwickler</h2>
                            </div>

                            <div>
                                <p className="polo-muted text-base leading-relaxed md:text-lg">
                                    Ich entwickle Fullstack-Webanwendungen mit React, TypeScript, Next.js, Express,
                                    Prisma und PostgreSQL. Mein Fokus liegt auf robusten Architekturen,
                                    guter UX und nachhaltiger Codequalität.
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {profileTags.map((item) => (
                                        <span key={item} className="polo-chip px-3 py-1 text-sm text-white/80">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
