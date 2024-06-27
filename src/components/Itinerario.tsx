// Itinerario.tsx
import type { Itinerario } from "../app/Modelo";

interface ItinerarioProps {
    itinerario: Itinerario;
}

export default function Itinerario(props: ItinerarioProps) {
    return (
        <div className="bg-neutral shadow-xl">
            <div className="flex justify-between">
                <h3 className="font-bold text-2xl m-4">{props.itinerario.viaje.destino}</h3>
                <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </div>
            <p className="mb-10 text-5xl center text-center">{props.itinerario.viaje.viajero}</p>
        </div>
    )
}