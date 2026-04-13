import { useState } from "react";
import { Link } from "react-router-dom";
import ZertifikatImg from "../assets/Zertifikat.png";
import ThemenImg from "../assets/Themen.png";
import KurszertifikatPreview from "../assets/Kurszertifikat_Hakan_Oeztuerk.png";
import KurszertifikatPdf from "../assets/Kurszertifikat_Hakan_Oeztuerk.pdf";
import {
    cvCompetencies,
    cvModules,
    itQualification,
    workExperience,
} from "../data/lebenslaufData";

export default function Certificate() {
    const images = [
        { title: "Digitales Produktdesign", img: ZertifikatImg },
        { title: "Themen", img: ThemenImg },
        {
            title: "Kurszertifikat: Webentwicklung",
            img: KurszertifikatPreview,
            downloadSrc: KurszertifikatPdf,
        },
    ];

    const [active, setActive] = useState(null);
    const next = () => setActive((active + 1) % images.length);
    const prev = () => setActive((active - 1 + images.length) % images.length);

    const download = (src) => {
        const a = document.createElement("a");
        a.href = src;
        a.download = "Dokument.pdf";
        a.click();
    };

    return (
        <section className="px-3 pb-20 pt-8">
            <div className="polo-container space-y-10">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">Lebenslauf</p>
                    <h1 className="mt-2 text-4xl font-bold text-white md:text-6xl">Qualifikation, Zertifikate, Berufserfahrung</h1>
                    <p className="polo-muted mt-3 text-lg">
                        Vollständige Übersicht über Ausbildung, Kompetenzen und berufliche Stationen von Hakan Öztürk.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
                    <article className="polo-panel p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60">IT-Fachkraft</p>
                        <p className="mt-2 text-xl font-semibold text-white">
                            {itQualification.title} am {itQualification.institute}
                        </p>
                        <p className="polo-muted mt-3 text-sm leading-relaxed">
                            Zeitraum: {itQualification.period}. {itQualification.format} mit {itQualification.lessons}.
                        </p>

                        <div className="mt-5 space-y-3">
                            {cvModules.map((module) => (
                                <div
                                    key={module}
                                    className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white/90"
                                >
                                    {module}
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link to="/contact" className="polo-btn-dark">
                                Kontakt
                            </Link>
                        </div>
                    </article>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {cvCompetencies.map((item) => (
                            <article key={item} className="polo-panel p-4">
                                <p className="text-sm leading-relaxed text-white/90">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="polo-panel p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-white md:text-5xl">Zertifikate</h2>

                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {images.map((item, i) => (
                            <div key={item.title} className="text-center">
                                <h3 className="mb-3 text-base font-semibold text-white">{item.title}</h3>
                                <img
                                    src={item.img}
                                    onClick={() => setActive(i)}
                                    className="mx-auto w-full max-w-xs cursor-pointer rounded-2xl border border-white/20 bg-white/95 object-contain transition hover:scale-[1.02]"
                                    alt={item.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Berufserfahrung</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {workExperience.map((job) => (
                            <article key={`${job.period}-${job.role}`} className="polo-panel p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{job.period}</p>
                                <h3 className="mt-2 text-base font-semibold text-white">{job.role}</h3>
                                <p className="mt-1 text-sm text-white/75">{job.company}</p>
                                <p className="polo-muted mt-2 text-sm leading-relaxed">{job.highlights}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {active !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85">
                    <button onClick={() => setActive(null)} className="absolute right-5 top-5 text-3xl text-white">
                        X
                    </button>

                    <button onClick={prev} className="absolute left-6 text-4xl text-white">
                        {"<"}
                    </button>

                    <div className="flex flex-col items-center px-6">
                        <img
                            src={images[active].img}
                            className="max-h-[80vh] max-w-3xl rounded-2xl border border-white/25"
                            alt={images[active].title}
                        />
                        <button
                            onClick={() => download(images[active].downloadSrc || images[active].img)}
                            className="polo-btn-light mt-4"
                        >
                            PDF Download
                        </button>
                    </div>

                    <button onClick={next} className="absolute right-6 text-4xl text-white">
                        {">"}
                    </button>
                </div>
            )}
        </section>
    );
}
