import { useCallback } from "react";

export default function UseCallBack() {
  
  const greet = useCallback((name, onComplete) => {
    console.log(`Hello, ${name}!`);
    onComplete();
  }, []);

  const handleClick = () => {
    greet("Syntax", () => console.log("Done."));
  };

  return (
    <button onClick={handleClick}>Klicken</button>
  );
}
