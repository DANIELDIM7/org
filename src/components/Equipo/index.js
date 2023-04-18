import './Equipo.css'
import React from 'react'

const Equipo = (props) => {
  return (
    <section className='equipo'>
        <h3>{props.equipo}</h3>
        <div className='colaboradores'>

        </div>

    </section>
  )
}

export default Equipo