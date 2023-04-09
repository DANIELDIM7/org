import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {

  const manejarEnvio = (event) =>{
    event.preventDefault();
    console.log('Manejar el envío',event);
    
  }
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar el nombre" required={true} />
        <CampoTexto titulo="Puesto" placeholder="Ingresar el puesto" required />
        <CampoTexto titulo="Foto"   placeholder="Ingresar enlace de foto" />
        <ListaOpciones/>
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
