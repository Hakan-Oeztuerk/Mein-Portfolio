
import video from './public/Video.mp4';
import Profil from './public/Profil.jpg';

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
        </div>
    );
}
