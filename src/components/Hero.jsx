import Video from '../assets/Video.mp4';
import Profil from '../assets/Profil.jpg';

export default function Hero() {
    return (
        <>

            <div className="relative w-full overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-140 brightness-15 object-cover"
                    src={Video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                />

                <div className="relative z-1 ml-40 mt-10 mr- h-full text-white p-4">

                    <h1 className="text-4xl  font-bold mb-2">
                        Design trifft Code - Kreative digitale Lösungen von Hakan.
                    </h1>
                    <p className="text-xl mb-6 ">
                        Von Wireframes bis interactiven Weblösungen, hier verschmelzen Kreativität und Technik.</p>
               
                    <div className="flex items-center gap-6 mb-4">
                        <img
                            src={Profil}
                            className="w-48 rounded-2xl"
                            alt="Mein Bild"
                        />

                    </div>

                </div>
            </div>
        </>
    );
}