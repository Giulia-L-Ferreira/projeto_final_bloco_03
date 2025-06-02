import { useEffect, useState } from "react";
import CardCategoria from "./CardCategorias";
import type Categoria from "../../models/Categoria";
import { buscar } from "../../services/Service";

function ListarCategorias() {

    const [categoria, setCategoria] = useState<Categoria[]>([]);



    async function buscarCategoria() {
        try {
            await buscar('/categoria', setCategoria)

        } catch (error: any) {
            if (error.toString().includes("403")) {
                console.log("Usuário não autorizado")
            }
        }
    }

    useEffect(() => {
        buscarCategoria()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoria.length])

    return(
        
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        {categoria.map((categoria) => (<CardCategoria key={categoria.id} categoria={categoria} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias