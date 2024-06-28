"use client"

import { useEffect, useState } from "react";
import { Itinerario, Lista } from "./Modelo";
import Link from 'next/link'
import { api } from "./utils";
import ItinerarioItem from "@/components/Itinerario";

const LISTA_INICIAL: Lista = { itinerarios: [] };

export default function Home() {
  const [listado, setListado] = useState<Lista>(LISTA_INICIAL);

  useEffect(() => {
    api<Lista>('/v1/itinerarios')
      .then((data: Lista) => {
        setListado({itinerarios: data.itinerarios});
      })
  },[])
  
  return (
    <>
      <h1 className="text-3xl mb-8">Tu lista de itinerarios</h1>

      <Link href="/agregar" className="btn btn-primary" prefetch={true}>
        Agregar Destino
      </Link>

      <div className="grid 
        lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
        p-4 justify-between gap-2">
          {listado.itinerarios.map(i =>         
            <Link key={i.id} href={`./mostrar/${i.id}`} className="">
              <ItinerarioItem key={i.id} itinerario={i}></ItinerarioItem>
            </Link>
          )}
      </div>
    </>
  );
}