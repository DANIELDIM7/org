import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");

  const manejarEnvio = (event) => {
    event.preventDefault();
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
    }
    console.log(datosAEnviar);
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar el nombre"
          required={true}
          valor={nombre}
          actualizarValor={setNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar el puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
