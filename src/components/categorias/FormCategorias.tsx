import { useEffect, useState, type ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../util/ToastAlerta";
import { atualizar, buscar, cadastrar } from "../../services/Service";
import { useNavigate, useParams } from "react-router";
import type Categoria from "../../models/Categoria";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    function retornar() {
        navigate("/categorias")
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta("Erro ao buscar a categoria.", "erro")
            }
        }
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias/${id}`, categoria, setCategoria)
                ToastAlerta("A categoria foi atualizado com sucesso!", "sucesso")
            } catch (error: any) {
                ToastAlerta("Erro ao atualizar a categoria.", "erro")
            }
        } else {
            try {
                console.log("cadastrando categoria", categoria);

                await cadastrar(`/categorias`, categoria, setCategoria)
                ToastAlerta("A categoria foi cadastrado com sucesso!", "sucesso")
            } catch (error: any) {
                ToastAlerta("Erro ao cadastrar a categoria.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                Cadastrar categoria
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da categoria</label>
                    <input
                        type="text"
                        placeholder="Nomeie sua categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nomeCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricaoCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;