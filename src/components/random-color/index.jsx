import { useState, useEffect } from "react";
// import "../../random.css";

export default function RandomColor() {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
     <button
  onClick={() => settypeOfColor("hex")}
  style={{
    backgroundColor: '#230338c7',
    color: '#fff',
    border: '2px solid black',
    borderRadius: '5px',
    marginRight: '10px'
    
  }}
>
  Create HEX Color
</button>
      <button onClick={() => settypeOfColor("rgb")}
          style={{
            backgroundColor: '#15034f',
            color: '#fff',
            border: '2px solid black',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        >Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateRandomHexColor : () => {} // Temporary empty function to avoid errors
          // handleCreateRandomRgbColor
        }
        style={{
            backgroundColor: '#340303',
            color: '#fff',
            border: '2px solid black',
            borderRadius: '5px',
            marginRight: '10px'
          }}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fffff",
          fontSize: "60px",
          marginTop: "30px",
          flexDirection: 'column',
          gap: '5px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
