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

  // Mi lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front end",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {mostrarFormulario ? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)} /> : <></>} 
      {/* Para obtener a través de map solamente los datos del título */}
      <MiOrg onChange={cambiarMostrar}/>
      {equipos.map(
        (equipo) => (<Equipo datos={equipo} key={equipo.titulo} />) //Debe tener un key único para que no de un error en este caso le pusimos el título, el cuál es único para cada elemento del objeto (SIEMPRE QUE SE TRABAJE CON EL MÉTODO MAP SE DEBE DAR UN KEY QUE FUNCIONARÁ COMO REFERENCIA)
      )}
    </div>
  );
}

export default App;
