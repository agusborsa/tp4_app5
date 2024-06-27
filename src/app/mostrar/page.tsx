import React, { use } from 'react'
import { Actividad } from '../Modelo'
import { Itinerario } from '../Modelo'
import { api } from '../utils'


const Mostrar = (act: Actividad[]) => {
 /*  return (
     act.map(a =>{
        return (
             <div key={a.id}>
                <h1>{a.nombre}</h1>
                <p>{a.descripcion}</p>
                <p>{String(a.inicio)}</p>
                <p>{String(a.fin)}</p>
            </div>              
        )
    })
  ) */
  return <div>hola</div>
}

export default Mostrar