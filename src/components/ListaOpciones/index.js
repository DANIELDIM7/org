import React from "react";
import "./ListaOpciones.css";

const ListaOpciones = () => {
  // Método map -> arreglo.map((equipo,index) => {<option><option/>})
  const equipos = [
    "Programación",
    "Front end",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select>
        {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}; // tiene que ir un key porque js le pide un identificador único.. Con el map se recorre el arreglo y se muestra cada uno de los valores que hay adentro
        
      </select>
    </div>
  );
};

export default ListaOpciones;
