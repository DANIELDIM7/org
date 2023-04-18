import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header.js";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";

function App() {
  const [mostrarFormulario, setMostrar] = useState(false);
  const cambiarMostrar = () => {
    setMostrar(!mostrarFormulario);
  };
  return (
    <div>
      <Header />
      {mostrarFormulario ? <Formulario /> : <></>}

      <MiOrg onChange={cambiarMostrar} />
      <Equipo equipo='Programación'/>
      <Equipo equipo='Front-End'/>
      <Equipo equipo='Data Science'/>
      <Equipo equipo='Devops'/>
      <Equipo equipo='UX y Diseño'/>
    </div>
  );
}

export default App;
