"use client"

import { useEffect, useState } from "react";
import { Lista } from "./Modelo";
import Link from 'next/link'
import { api } from "./utils";
import Itinerario from "../components/Itinerario";

const LISTA_INICIAL: Lista = { itinerarios: [] };

export default function Home() {
  const [listado, setListado] = useState<Lista>(LISTA_INICIAL);

  useEffect(() => {
    api<Lista>('/v1/listado')
      .then((data: Lista) => {
        setListado(data);
      })
  }, []);

  return (
    <>
      <h1 className="text-3xl mb-8">Tu lista de itinerarios</h1>

      <Link href="/agregar" className="btn btn-primary" prefetch={true}>
        Agregar Destino
      </Link>

      <div className="flex 
        lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
        gap-8 p-4">
        {listado.itinerarios.map(i =>
          <Itinerario key={i.id} itinerario={i}></Itinerario>
        )}
      </div>
    </>
  );
}
