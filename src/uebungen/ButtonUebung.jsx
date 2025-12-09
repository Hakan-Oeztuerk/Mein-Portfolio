import { useState } from 'react';

export default function ButtonUebung() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["red", "blue", "green", "yellow"];

  const handleButtonClick = () => {
    const output = document.getElementById("output");
    if (output) {
      output.textContent = "Button wurde geklickt!";
    }
  };

  const handleColorChange = () => {
    const box = document.getElementById("colorBox");
    if (box) {
      const nextIndex = (colorIndex + 1) % colors.length;
      box.style.backgroundColor = colors[nextIndex];
      setColorIndex(nextIndex);
    }
  };

  return (
    <div className="p-4">
        
      <button id="myButton" onClick={handleButtonClick} className="px-4 py-2 rounded-xl shadow">
        Klick mich!
      </button>
      <p id="output" className="mt-2"></p>

      <button id="colorButton" onClick={handleColorChange} className="px-4 py-2 mt-4 rounded-xl shadow">
        Farbe wechseln
      </button>
      <div id="colorBox" style={{ width: '200px', height: '200px', backgroundColor: colors[0], marginTop: '10px' }}></div>
    </div>
  );
}
