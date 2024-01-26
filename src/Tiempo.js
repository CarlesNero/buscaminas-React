import { useState, useEffect } from "react";

export default function Tiempo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const idTemporizador = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000)

    return ()=>{
        clearInterval(idTemporizador);
      };
  });


  return (
    <input
      className="col-4 rounded-3 border-0"
      type="text"
      readOnly
      placeholder={seconds}
    />
  );
}
