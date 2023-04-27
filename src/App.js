import { useState } from "react";
import { v4 as uuid } from "uuid";
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
      id: uuid(),
      equipo: "Front end",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav:true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:false
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front end",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
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

  const eliminarColaborador = (id) => {
    
  const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    ); //Solo me devuelde los colaboradores que sean diferentes a los al id que queremos eliminar osea deja todos menos el que corresponde al id
    setColaboradores(nuevosColaboradores)
  };

  // Actualizar color de equipo

  const actualizarColor = (color, id) => {
   
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color; // verificamos si el equipo es igual al que le queremos modificar el color(este dato viene del componente equipos por medio de la función actualizar color), si corresponde entonces tomamos el dato del color y lo actualizamos del estado
      }
      return equipo;
    });
    setEquipos(equiposActualizados);
  };

  // Crear equipo 
  const cearEquipo = (nuevoEquipo) =>{
console.log(nuevoEquipo)
setEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
  }

  // Like

  const like = (id) => {
    const colaboradoresActualizados =  colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador //Busca si el id del colaborador es igual al que se le da el clic y en caso de que si le cambia el valor de fav
    })
    setColaboradores(colaboradoresActualizados) //Aquí actualizo el estado de los colaboradores
  }

  return (
    <div>
      <Header />
      {mostrarFormulario ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          cearEquipo={cearEquipo}
        />
      ) : (
        <></>
      )}
      {/* Para obtener a través de map solamente los datos del título */}

      <MiOrg onChange={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )} // con esto garantizamos que solo va a ingresar los colaboradores que pertenezcan a cada equipo
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
