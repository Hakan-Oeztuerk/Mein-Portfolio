import Profil from '../assets/Profil.jpg';
import Navbar from '../components/navbar.jsx';
import Video from '../assets/Video.mp4';

export default function About() {
    return (
        <>
            <Navbar />

            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-140 brightness-15 object-cover"
                    src={Video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                />

                <div className="relative z-1 ml-40 mt-20 h-full text-white p-4">

                    <h1 className="text-5xl  font-bold mb-8">
                        Willkommen auf meiner Webseite!
                    </h1>
               
                    <div className="flex items-center gap-6 mb-4">
                        <img
                            src={Profil}
                            className="w-48 rounded-2xl"
                            alt="Mein Bild"
                        />

                        <div>
                            <h5 className="text-lg md:text-2xl mb-2">Hi, ich bin Hakan.</h5>
                            <p className="text-lg md:text-xl font-light text-white">
                               Digital Product Designer & Webentwickler in Ausbildung.
                            </p>
                            <p className="text-white mt-4 mr-40">
                               Seit 2003 war ich in der Gastronomie tätig und habe dort gelernt, organisiert und lösungsorientiert zu arbeiten. 2019 machte ich mich selbständig, doch durch die Pandemie änderte sich meine berufliche Situation, und ich arbeitete eine Zeit lang bei der Post. Auf der Suche nach einer neuen Perspektive fand ich die Umschulung beim Syntax Institut, die perfekt zu meiner Leidenschaft für Gestaltung und Technik passte. Während der Ausbildung zum Digital Product Designer lernte ich Themen wie Farbe, Typografie, Designprinzipien, Konkurrenz & Anforderungsanalyse, Wireframes, Prototypen, Animationen, Microinteraktionen, Informationsarchitektur, Personas, User Flows und Projektplanung mit Scrum kennen. Außerdem arbeitete ich intensiv mit Tools wie Figma und Framer. Nach meinem erfolgreichen IHK-Abschluss als Digital Product Designer habe ich mit der Einführung in Software und Webentwicklung begonnen. Ich habe Kenntnisse in HTML, CSS, Bootstrap, Responsive Design, JavaScript, API-Integration, Versionsverwaltung (Git) erworben und lerne aktuell React, Tailwind CSS, TypeScript und Backend-Entwicklung. Ich liebe es, zu verstehen, wie aus Code und Design funktionierende digitale Produkte entstehen  klar, nutzerfreundlich und mit Liebe zum Detail.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
