import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("#1ecbe1");

  const handleClick = () => {
    let colorHex = "#";
    let letter = "123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      colorHex += letter[Math.floor(Math.random() * letter.length)];
    }
    setColor(colorHex);
  };

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className={"h-screen pt-10"}
        id={"container"}
      >
        <div className={"text-center space-y-32 "}>
          <h1 className={"text-5xl "} id={"heading"}>
            Random Color
          </h1>
          <div className={"space-x-20"}>
            <button
              className="bg-blue-500  text-white font-bold py-2 px-4   border-blue-700  rounded"
              onClick={(e) => handleClick(e)}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
