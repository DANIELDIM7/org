import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header.js";
import MiOrg from "./components/MiOrg";

function App() {
  const [mostrarFormulario, setMostrar] = useState(true);
  const cambiarMostrar = () => {
    setMostrar(!mostrarFormulario);
  };
  return (
    <div>
      <Header />
      {mostrarFormulario ? <Formulario /> : <></>}

      <MiOrg onChange={cambiarMostrar} />
    </div>
  );
}

export default App;
