import React, { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [color, serColor] = useState("");

  const { registrarColaborador, cearEquipo } = props;

  const manejarEnvio = (event) => {
    event.preventDefault();
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    cearEquipo({ titulo, colorPrimario: color });
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar el título"
          required={true}
          valor={nombre}
          actualizarValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar el puesto"
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={setEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar el nombre"
          required={true}
          valor={titulo}
          actualizarValor={setTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en hex"
          valor={color}
          actualizarValor={serColor}
          type='color'
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
