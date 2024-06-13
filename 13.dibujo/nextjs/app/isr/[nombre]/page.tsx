import Layout from "@/components/layout";
import { PageProps, Post, buscaPosts, numeroParaLaQuiniela } from "@/lib/utils";
import { useEffect, useState } from "react";

// Indico que SI le haga caso a los parametros dinamicos asi pasamos de SSG a ISR
export const dynamicParams = true;

// Defino cuales son los parametros que va a dibujar en build
export async function generateStaticParams() {
    return [{ nombre: 'pepe' }, { nombre: 'lala' }];
}

export default async function ISR(props: PageProps) {

    // Muy parecido a SSR
    const posts = await buscaPosts();

    console.log("Dibujando pagina en ISR con nombre:", props.params.nombre);

    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                ISR: Incremental Static Regeneration
            </h1>

            <p className="mt-5">Hola {props.params.nombre}</p>

            <p className="mt-5">{new Date().toLocaleString()}</p>

            <p className="mt-5">Jugale al {numeroParaLaQuiniela()}</p>

            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Posts
            </h2>

            <ol className="my-6 ml-6 list-disc [&>li]:mt-2">
                {posts.map(p => <li key={p.id}>{p.title}</li>)}
            </ol>
        </>
    );
}
