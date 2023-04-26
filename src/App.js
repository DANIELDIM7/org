import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header.js";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [mostrarFormulario, setMostrar] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },
    {
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
    },
    {
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
    },
    {
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
    },
    {
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
    },
  ]);
  // se debe manejar arreglos por lo que se van a trabajar listas
  const cambiarMostrar = () => {
    setMostrar(!mostrarFormulario);
  };

  // Registrar

  const registrarColaborador = (colaborador) => {
    // Spread operator
    setColaboradores([...colaboradores, colaborador]);
  };

  // Eliminar colaborador

  const eliminarColaborador = () => {
    console.log("Eliminar colaborador");
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
      {mostrarFormulario ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      ) : (
        <></>
      )}
      {/* Para obtener a través de map solamente los datos del título */}

      <MiOrg onChange={cambiarMostrar} />
      {equipos.map(
        (equipo) => (
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaborador = {eliminarColaborador}
          /> // con esto garantizamos que solo va a ingresar los colaboradores que pertenezcan a cada equipo
        ) //Debe tener un key único para que no de un error en este caso le pusimos el título, el cuál es único para cada elemento del objeto (SIEMPRE QUE SE TRABAJE CON EL MÉTODO MAP SE DEBE DAR UN KEY QUE FUNCIONARÁ COMO REFERENCIA)
      )}
      <Footer />
    </div>
  );
}

export default App;
