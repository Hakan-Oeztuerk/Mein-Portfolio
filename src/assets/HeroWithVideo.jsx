
import video from './Video.mp4';
import Profil from './Profil.jpg';

export default function HeroWithVideo() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full brightness-25 object-cover"                src={video}
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
            />
            <div className="relative z-2 flex flex-col items-center justify-center h-full text-white bg-opacity-50">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Willkommen auf meiner Webseite!
                </h1>
                <img src={Profil} className="w-48 rounded-2xl mb-4" alt="Mein Bild" />
                <p className="text-lg md:text-2xl">Hi, ich bin Hakan.</p>
            </div>
        </div>
    );
}
