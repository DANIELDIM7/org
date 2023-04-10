
import './CampoTexto.css'

const CampoTexto = (props) => {
  

  const manejarCambio = (e)=>{
    props.actualizarValor(e.target.value) //Para que actualice el valor del estado con cada letra que se ingrese al input
  }
  
  return (
    <div className='campo-texto'>
      <label>{props.titulo}</label>
      <input placeholder={props.placeholder} required={props.required} value={props.valor}
      onChange={manejarCambio}
      />
    </div>
  )
}

export default CampoTexto