import React, { useState } from "react";

import ZertifikatImg from "../assets/Zertifikat.png";
import ThemenImg from "../assets/Themen.png";
import Modul1Img from "../assets/Modulbescheinigung1.png";
import Modul2Img from "../assets/Modulbecheinigung2.png";

export default function Certificate() {
    const [data, setData] = useState({
        name: "Hakan Öztürk",
        course: "Web Development",
        module1: "Modul 1: Produktdesign & Entwicklung.",
        module2: "Modul 2: Einführung Software & Webentwicklung.",
    });

    const images = [
        { title: "Digital Product Designer", img: ZertifikatImg },
        { title: "Themen", img: ThemenImg },
        { title: data.module1, img: Modul1Img },
        { title: data.module2, img: Modul2Img },
    ];

    const [active, setActive] = useState(null);

    const handleChange = (key, value) => setData({ ...data, [key]: value });

    const next = () => setActive((active + 1) % images.length);
    const prev = () => setActive((active - 1 + images.length) % images.length);

    const download = (src) => {
        const a = document.createElement("a");
        a.href = src;
        a.download = "Dokument.pdf";
        a.click();
    };

    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto text-white">
                <h1 className="text-4xl font-bold mb-3 mt-10">Mein Weg in Design & Code.</h1>
                <p className="mb-10 text-2xl">Ausbildung und Zertifikate.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-[#212121] border-2 p-6 rounded-lg space-y-4">
                        <h2 className="text-2xl font-bold mb-6">Bearbeitung</h2>

                        {Object.keys(data).map((key) => (
                            <div key={key}>
                                <label className="block text-sm font-semibold mb-2">{key}:</label>
                                <input
                                    className="w-full bg-gray-700 p-2 rounded text-sm"
                                    value={data[key]}
                                    onChange={(e) => handleChange(key, e.target.value)}
                                />
                            </div>
                        ))}

                        <button
                            onClick={() => window.print()}
                            className="w-full mt-6 bg-cyan-700 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded"
                        >
                            🖨️ Drucken
                        </button>
                    </div>

                    <div className="lg:col-span-2 p-12 bg-[#212121] rounded-lg shadow-2xl border-2">
                        <h2 className="text-6xl font-bold mb-10">ZERTIFIKAT</h2>
                        <h3 className="text-3xl font-bold mb-4">Zertifikate</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {images.slice(0, 2).map((item, i) => (
                                <div key={i} className="text-center">
                                    <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                                    <img
                                        src={item.img}
                                        onClick={() => setActive(i)}
                                        className="w-64 h-90 object-cover rounded shadow border-2 cursor-pointer hover:scale-105 transition mx-auto"
                                    />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-3xl font-bold mb-4 mt-10">Modulbescheinigungen</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {images.slice(2).map((item, i) => (
                                <div key={i + 2} className="text-center">
                                    <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                                    <img
                                        src={item.img}
                                        onClick={() => setActive(i + 2)}
                                        className="w-64 h-90 object-cover rounded shadow border-2 cursor-pointer hover:scale-105 transition mx-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {active !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <button
                        onClick={() => setActive(null)}
                        className="absolute top-5 right-5 text-white text-3xl"
                    >
                        ✖
                    </button>

                    <button onClick={prev} className="absolute left-10 text-white text-4xl">
                        ❮
                    </button>

                    <div className="flex flex-col items-center">
                        <img
                            src={images[active].img}
                            className="max-w-3xl max-h-[80vh] rounded shadow-lg border-4"
                        />
                        <button
                            onClick={() => download(images[active].img)}
                            className="mt-4 bg-cyan-600 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded"
                        >
                            📄 PDF Download
                        </button>
                    </div>

                    <button onClick={next} className="absolute right-10 text-white text-4xl">
                        ❯
                    </button>
                </div>
            )}

            <style>{`
        @media print {
          .lg\\:col-span-1 { display: none; }
          .lg\\:col-span-2 { grid-column: span 3; }
        }
      `}</style>
        </div>
    );
}
