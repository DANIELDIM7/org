import "./Colaborador.css";
import React from "react";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador,like } = props;

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      ></AiFillCloseCircle>
      {/* Se añade una arrow funcion para que cuando se de onclick se llame la función de eliminar */}
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre}></img>
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? <AiFillHeart color="red" onClick={() =>like(id)} /> : <AiOutlineHeart onClick={() =>like(id)} />}
      </div>
    </div>
  );
};

export default Colaborador;
//
