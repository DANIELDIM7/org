import "./Campo.css";

const Campo = (props) => {
  // Destructuraicón
  const { type } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value); //Para que actualice el valor del estado con cada letra que se ingrese al input
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type} // ponemos el tipo que por defecto viene de tipo text en caso de que sea otro diferente por medio de las props,se modificará
      />
    </div>
  );
};

export default Campo;
