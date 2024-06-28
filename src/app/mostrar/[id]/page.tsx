"use client"
import React, { useEffect, useState } from 'react'
import { Actividad } from '../../Modelo'
import { Itinerario } from '../../Modelo'
import { api } from '../../utils'

const Mostrar = ({props}: any) => {
    const [listado, setListado] = useState<Actividad[]>([]);
    console.log(props);
    useEffect(() => {
        api<Itinerario>(`/v1/itinerario/${props.id}`)
            .then((data: Itinerario) => {
                setListado(data.actividades);
            })    
        },[])
  return (
     listado.map(a =>{
        return (
             <div key={a.id}>
                <h1>{a.nombre}</h1>
                <p>{a.descripcion}</p>
                <p>{String(a.inicio)}</p>
                <p>{String(a.fin)}</p>
            </div>              
        )
    })
  )
  return <div>hola</div>
}

export default Mostrar