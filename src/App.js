import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Celda from "./Celda";
import Tiempo from "./Tiempo";

function App() {
  //Valores
  const valores = [
    "1",
    "1",
    "1",
    "0",
    "0",
    "1",
    "💣",
    "1",
    "0",
    "0",
    "1",
    "1",
    "2",
    "2",
    "1",
    "0",
    "1",
    "💣",
    "💣",
    "1",
    "0",
    "1",
    "2",
    "2",
    "1",
  ];

  //Definir state
  const [mapaValores, setMapaValores] = useState(Array(25).fill(" "));
  const celdas = mapaValores.map((item, index) => (
    <div className="py-0 p-0" key={index}>
      <Celda valor={item} onCeldaClick={() => mostrarValor(index)} />
    </div>
  ));

  //Función para iniciar partida (respuesta al botón)

  const btnComenzar = () => {
    setMapaValores(Array(25).fill(" "));
  };
  //Función que cambia el valor de una celda
  const mostrarValor = (index) => {
    const valoresNuevos = mapaValores.slice();
    valoresNuevos[index] = valores[index];
    setMapaValores(valoresNuevos);
  };

  return (
    <div className="pt-3 pb-3 p-2 d-flex flex-column align-items-center">
      <div className="container d-flex justify-content-center p-2 rounded-4 gap-3">
        <Tiempo />
        <img src="img/bx-bomb 1.png" alt="bomb" />
        <input
          className="col-4 rounded-3 border-0"
          type="text"
          readOnly
          placeholder="00"
        />
      </div>
      <div className="container-sm d-flex justify-content-center mx-auto  mt-2 px-0 py-2 rounded-4  row gap-2">
        <div className="col my-1 p-0">
          <div className="d-flex flex-wrap justify-content-center gap-1">
            {celdas}
          </div>
        </div>
      </div>
      <buttton className="btn  text-white  mt-2 boton" onClick={btnComenzar}>
        Reiniciar partida
      </buttton>
    </div>
  );
}

export default App;
