import React from "react";
import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
  // Destructuración
  const { colorPrimario, colorSecundario, titulo,id } = props.datos;
  const { colaboradores,eliminarColaborador,actualizarColor,like } = props;
  const obj = {
    backgroundColor:  hexToRgba(colorPrimario,0.6) //El 0.6 es el valor de la opacidad para el background
  };

  const estiloTitulo = { borderColor: colorPrimario };
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
          type="color"
          className="input-color"
          value={colorPrimario}
          onChange={(event)=> actualizarColor(event.target.value,id)} // la función actualizar color recibe el color que se obtiene de event.target.value y el título que es propio del equipo en el que estemos cliqueando y que viene de props
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador datos={colaborador} key={index}
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
              like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
