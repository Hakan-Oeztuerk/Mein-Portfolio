import { useEffect, useRef } from "react";
import Video from '../assets/Video.mp4';
import Profil from '../assets/Profil.jpg';

export default function Hero() {

   
    const rotatingRef = useRef(null);
    useEffect(() => {
        const words = ["#Product Design", "UX/UI", "#Interaction", "#Webentwicklung", "#React", "#Front-End"];
        let index = 0;

        const interval = setInterval(() => {
            if (!rotatingRef.current) return;
            rotatingRef.current.style.opacity = 0;

            setTimeout(() => {
                index = (index + 1) % words.length;
                rotatingRef.current.textContent = words[index];
                rotatingRef.current.style.opacity = 1;
            }, 350);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    
    const tags = [
        "#UI/UX", "#Product Design", "#JavaScript", "#React", "#TypeScript",
        "#Interaction", "#Figma", "#HTML", "#CSS", "#Design Systems"
    ];

    const areaRef = useRef(null);
    useEffect(() => {
        const area = areaRef.current;
        if (!area) return;

        area.innerHTML = "";

        tags.forEach((text, i) => {
            const span = document.createElement("span");
            span.textContent = text;

            span.className =
                "absolute text-white bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold opacity-0 transition-all duration-700 shadow-lg";

       
            span.style.left = `${Math.random() * 80 + 5}%`;
            span.style.top = `${Math.random() * 70 + 10}%`;

       
            const rot = Math.random() * 12 - 6;
            span.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;

        
            setTimeout(() => {
                span.style.opacity = 1;
            }, 200 + i * 120);

            area.appendChild(span);
        });
    }, []);

    return (
        <div className="relative w-full h-140 overflow-hidden">

          
            <video
                className="absolute top-0 left-0 w-full h-140 object-cover z-10 brightness-20"
                src={Video}
                muted
                autoPlay
                loop
                playsInline
            />

           
            <div className="relative z-10 ml-40  text-white p-4 w-[900px]">

                <h1 className="text-4xl font-bold leading-tight mb-2">
                    Design trifft Code –{" "}
                    <span ref={rotatingRef} className="transition-opacity duration-500 inline-block">
                        Product Design
                    </span>
                </h1>

                <p className="text-xl mb-6">
                    Von Wireframes bis interaktiven Weblösungen – hier verschmelzen Kreativität und Technik.
                </p>

                <div className="flex items-center gap-6 mb-2">
                    <img
                        src={Profil}
                        className="w-48 h-48 object-cover rounded-2xl shadow-xl"
                        alt="Profil"
                    />
                </div>

                <h4 className="text-2xl font-semibold">Hi ich bin Hakan Öztürk.</h4>
                <p className="mt-2 text-lg">UX/UI Designer & Webentwickler.</p>
            </div>
            
            <div
                ref={areaRef}
                className="absolute top-32 right-32 w-[800px] h-[580px] z-30 pointer-events-none"
            ></div>
        </div>
    );
}
