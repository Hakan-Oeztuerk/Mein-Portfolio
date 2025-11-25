import { useEffect, useRef } from "react";
import Video from '../assets/Video.mp4';
import Profil from '../assets/Profil.jpg';

export default function Hero() {
    const rotatingRef = useRef(null);
    const areaRef = useRef(null);
    const canvasRef = useRef(null);

  
    useEffect(() => {
        const words = [
            "Product-Design", "UX/UI", "Interaction",
            "JavaScript", "TypeScript", "React", "Front-End"
        ];

        let index = 0;

        const interval = setInterval(() => {
            if (!rotatingRef.current) return;

            rotatingRef.current.style.transition = "opacity 0.8s ease";
            rotatingRef.current.style.opacity = 0;

            setTimeout(() => {
                index = (index + 1) % words.length;
                rotatingRef.current.textContent = words[index];
                rotatingRef.current.style.opacity = 1;
            }, 800);
        }, 5500);

        return () => clearInterval(interval);
    }, []);

  
    useEffect(() => {
        const area = areaRef.current;
        if (!area) return;

        const tags = [
            "#UI/UX", "#Product Design", "#JavaScript", "#TypeScript",
            "#Interaction", "#Figma", "#HTML", "#CSS", "#Design Systems"
        ];

        const positions = [
            { x: "5%", y: "10%" }, { x: "30%", y: "8%" }, { x: "60%", y: "12%" },
            { x: "12%", y: "32%" }, { x: "38%", y: "35%" }, { x: "85%", y: "35%" },
            { x: "20%", y: "53%" }, { x: "35%", y: "47%" }, { x: "62%", y: "45%" },
            { x: "45%", y: "58%" }
        ];

        area.innerHTML = "";

        tags.forEach((text, i) => {
            const span = document.createElement("span");
            span.textContent = text;
            span.className = `
                absolute text-white bg-white/20 backdrop-blur-md 
                px-3 py-1 rounded-full text-sm font-semibold 
                opacity-5 transition-opacity duration-700 
                shadow-lg floating-tag
            `;
            span.style.left = positions[i]?.x;
            span.style.top = positions[i]?.y;
            span.style.transform = "translate(-50%, -50%)";

            setTimeout(() => {
                span.style.opacity = 1;
            }, 200 + i * 150);

            area.appendChild(span);
        });
    }, []);


    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = 560;

        const stars = [];
        const shootingStars = [];

    
        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.8,
                opacity: Math.random()
            });
        }


     

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

          
            stars.forEach(s => {
                ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            });

          
            shootingStars.forEach((s, i) => {
                ctx.strokeStyle = `rgba(255,255,255,${s.opacity})`;
                ctx.lineWidth = 2;

                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x + s.length, s.y + s.length * 0.);
                ctx.stroke();

                s.x += s.speed;
                s.y += s.speed * 0.2;
                s.opacity -= 0.01;

                if (s.opacity <= 0) shootingStars.splice(i, 1);
            });

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <div className="relative w-full h-140 overflow-hidden">

        
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-140 z-5 pointer-events-none"
            />

          
            <video
                className="absolute top-0 left-0 w-full h-140 object-cover z-0 brightness-12"
                src={Video}
                muted autoPlay loop playsInline
            />

          
            <div className="relative z-10 ml-40 text-white p-4 w-[720px]">
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

                <h4 className="text-2xl mt-6 font-semibold">Hi, ich bin Hakan Öztürk.</h4>
                <p className="mt-2 text-lg">UX/UI Designer & Webentwickler.</p>
            </div>

        
            <div
                ref={areaRef}
                className="absolute top-32 right-82 w-[800px] h-[580px] z-30 pointer-events-none"
            ></div>
        </div>
    );
}

