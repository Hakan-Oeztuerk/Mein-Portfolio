
import React, { useState, useRef } from "react";


import ZertifikatImg from "../assets/Zertifikat.png";
import ThemenImg from "../assets/Themen.png";
import Modul1Img from "../assets/Modulbescheinigung1.png";
import Modul2Img from "../assets/Modulbecheinigung2.png";


export default function Certificate() {
    const [certificateData, setCertificateData] = useState({
        name: "Hakan Öztürk",
        course: "Web Development",
        module1: "Modul 1: Produktdesign & Entwicklung.",
        module2: "Modul 2: Einführung Software & Webentwicklung.",
    });

    const certificateRef = useRef(null);

    const handleTextChange = (field, value) => {
        setCertificateData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-linear-to-br p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-3 mt-10">Mein Weg in Design & Code.</h1>
                    <p className="mb-10 text-2xl">Ausbildung und Zertifikate, alles was mich als Digital Product Designer & Webentwickler ausmacht.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


                    <div className="lg:col-span-1">
                        <div className="bg-[#212121] border-2 p-6 rounded-lg space-y-4">
                            <h2 className="text-2xl font-bold text-white mb-6">Bearbeitung</h2>


                            <div>
                                <label className="block text-white text-sm font-semibold mb-2">Name:</label>
                                <input
                                    type="text"
                                    value={certificateData.name}
                                    onChange={(e) => handleTextChange('name', e.target.value)}
                                    className="w-full bg-gray-700 text-white p-2 rounded text-sm"
                                />
                            </div>


                            <div>
                                <label className="block text-white text-sm font-semibold mb-2">Kurs:</label>
                                <input
                                    type="text"
                                    value={certificateData.course}
                                    onChange={(e) => handleTextChange('course', e.target.value)}
                                    className="w-full bg-gray-700 text-white p-2 rounded text-sm"
                                />
                            </div>


                            <div>
                                <label className="block text-white text-sm font-semibold mb-2">Modul 1:</label>
                                <input
                                    type="text"
                                    value={certificateData.module1}
                                    onChange={(e) => handleTextChange('module1', e.target.value)}
                                    className="w-full bg-gray-700 text-white p-2 rounded text-sm"
                                />
                            </div>


                            <div>
                                <label className="block text-white text-sm font-semibold mb-2">Modul 2:</label>
                                <input
                                    type="text"
                                    value={certificateData.module2}
                                    onChange={(e) => handleTextChange('module2', e.target.value)}
                                    className="w-full bg-gray-700 text-white p-2 rounded text-sm"
                                />
                            </div>

                            <button
                                onClick={handlePrint}
                                className="w-full mt-6 bg-cyan-700 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded"
                            >
                                🖨️ Drucken
                            </button>
                        </div>
                    </div>


                    <div className="lg:col-span-2">
                        <div
                            ref={certificateRef}
                            className=" text-white p-12 rounded-lg shadow-2xl border-2 print:shadow-none print:rounded-none"
                        >

                            <h2 className="text-6xl font-bold mt-3 text-white">ZERTIFIKAT</h2>

                            <div className="border-gray-300 ">
                                <h4 className="text-2xl font-bold mb-6">Zertifikate & Modulbescheinigungen:</h4>

                                <div className="space-y-8">

                                    <div>
                                        <h5 className="text-xl font-bold mb-2">Digital Product Designer</h5>
                                        <img
                                            src={ZertifikatImg}
                                            alt="Hauptzertifikat"
                                            className="w-full max-w-lg rounded shadow border-2"
                                        />
                                    </div>

                                    <div>
                                        <h5 className="text-xl font-bold mb-2">Themen</h5>
                                        <img
                                            src={ThemenImg}
                                            alt="Themen"
                                            className="w-full max-w-lg rounded shadow border-2"
                                        />
                                    </div>


                                    <div>
                                        <h5 className="text-xl font-bold mb-2">{certificateData.module1}</h5>
                                        <img
                                            src={Modul1Img}
                                            alt="Modul 1 Bescheinigung"
                                            className="w-full max-w-lg rounded shadow border-2"
                                        />
                                    </div>

                                    <div>
                                        <h5 className="text-xl font-bold mb-2">{certificateData.module2}</h5>
                                        <img
                                            src={Modul2Img}
                                            alt="Modul 2 Bescheinigung"
                                            className="w-full max-w-lg rounded shadow border-2"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media print {
                    body {
                        background-color: white;
                    }
                    .lg\\:col-span-1 {
                        display: none;
                    }
                    .lg\\:col-span-2 {
                        grid-column: span 3;
                    }
                }
            `}</style>
        </div>
    );
}

