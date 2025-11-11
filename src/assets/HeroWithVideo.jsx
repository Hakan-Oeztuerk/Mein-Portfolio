
import video from './Video.mp4';
import Profil from './Profil.jpg';

export default function HeroWithVideo() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-200 brightness-25 object-cover"                src={video}
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
            />
            <div className="relative z-2 flex flex-col items-center  h-full text-white bg-opacity-50">
                <h1 className="text-4xl md:text-6xl font-bold mt-30 mb-20">
                    Willkommen auf meiner Webseite!
                </h1>
                <img src={Profil} className="w-60 rounded-2xl mb-4" alt="Mein Bild" />
                <h5 className="text-lg md:text-4xl mt-6">Hi, ich bin Hakan.</h5>
                <p className="text-md md:text-2xl mt-2 text-center px-4">Digital Product Designer & Webentwickler</p>
            </div>
        </div>
    );
}
