import React, { useState, useRef } from "react";

function Contador() {
  const [count, setCount] = useState(0);
  const audioRef = useRef(null);

  function handleClick() {
    setCount(count + 1);
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador: {count}</h1>
      <button onClick={handleClick}>Incrementar</button>
      <audio ref={audioRef} src="/sonido/boton.mp3" preload="auto" />
    </div>
  );
}

export default Contador;
