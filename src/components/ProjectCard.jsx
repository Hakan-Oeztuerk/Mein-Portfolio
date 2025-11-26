import TCProject from "../assets/TC-Project.png";
import TCPrototyp from "../assets/TC-Prototyp.png";
import TCCaseStudy from "../assets/TC-CaseStudy.png";

export default function ProjectCard() {
  return (
    <div className="outline outline-cyan-400 p-6 rounded-2xl shadow-xl w-full max-w-3xl">

      <h2 className="text-4xl font-extrabold text-white mb-2">
        Projekte, die funktionieren.
      </h2>

      <p className="text-gray-400 text-lg mb-8">
        Erlebe Interfaces, Webanwendungen und digitale Produkte,
        die intuitiv, klar und nutzerfreundlich gestaltet sind.
      </p>

      {/* Drei Bilder unterhalb des <p> */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <a href="https://www.figma.com/design/S4eH8P5UO7O499dKjGezo1/Batch_001_Block_3_Name-Hakan-%C3%96zt%C3%BCrk-UX_Design_and_Produktentwicklung_c7c361b348?node-id=2003-60" target="_blank" rel="noopener noreferrer" className="block">
          <img src={TCProject} alt="TuningConnect" className="rounded-xl shadow-lg w-full" />
        </a>
        <a href="https://www.figma.com/design/S4eH8P5UO7O499dKjGezo1/Batch_001_Block_3_Name-Hakan-%C3%96zt%C3%BCrk-UX_Design_and_Produktentwicklung_c7c361b348?node-id=2003-60" target="_blank" rel="noopener noreferrer" className="block">
          <img src={TCPrototyp} alt="Projektbild 2" className="rounded-xl shadow-lg w-full" />
        </a>
        <a href="https://www.figma.com/design/S4eH8P5UO7O499dKjGezo1/Batch_001_Block_3_Name-Hakan-%C3%96zt%C3%BCrk-UX_Design_and_Produktentwicklung_c7c361b348?node-id=2003-60" target="_blank" rel="noopener noreferrer" className="block">
          <img src={TCCaseStudy} alt="Projektbild 3" className="rounded-xl shadow-lg w-full" />
        </a>
      </div>

      <div className="flex gap-4 mt-6">

        <a
          href="https://github.com/Hakan-Oeztuerk/Mein-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          GitHub
        </a>

        <a
          href="https://www.framer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          Framer
        </a>

        <a
          href="https://www.behance.net/gallery/238838695/TuningConnect-Case-Study"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          Behance
        </a>

        <a
          href="https://www.figma.com/design/S4eH8P5UO7O499dKjGezo1/Batch_001_Block_3_Name-Hakan-%C3%96zt%C3%BCrk-UX_Design_and_Produktentwicklung_c7c361b348?node-id=2003-60"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          Figma
        </a>

      </div>
    </div>
  );
}

