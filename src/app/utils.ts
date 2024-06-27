import { Itinerario } from "./Modelo";

// utils.ts
/* export async function api<T>(url: string): Promise<T> {
    const urlCompleta = `${process.env.NEXT_PUBLIC_URL_API}${url}`;
    const response = await fetch(urlCompleta);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await (response.json() as Promise<T>);
}
 */
export async function api<T>(url: string): Promise<T> {
    const urlCompleta = `${process.env.NEXT_PUBLIC_URL_API}${url}`;
    const response = await fetch(urlCompleta);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json() as T;
}

export interface AgregarItinerarioParams { destino: string, viajero: string, inicio: Date, fin: Date};
export interface AgregarItinerarioRespuesta { mensaje: string, status: boolean }

export async function agregarItinerario(params: AgregarItinerarioParams): Promise<AgregarItinerarioRespuesta> {
    const urlCompleta = `${process.env.NEXT_PUBLIC_URL_API}/v1/itinerario/agregar`;

    const response = await fetch(urlCompleta, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });

    if (!response.ok) {
        var body = await response.text();
        return { mensaje: `Error agregando itinerario: ${body}`, status: false};
    }
    else {
        var itinerario = await (response.json() as Promise<Itinerario>);
        return { mensaje: `Itinerario agregado con éxito!`, status: true};
    }
}

