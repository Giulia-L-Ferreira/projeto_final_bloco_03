import { useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    categoria: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Produto enviado:", produto);
    // Aqui você conecta com sua API (POST ou PUT)
  };

  return (
    <div className="bg-green-50 text-green-900 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Seja Bem Vindo!</h1>
      <p className="text-lg mb-6">Cadastre aqui suas categorias de produtos</p>
      
      <Link to="/criar" className="border-2 border-green-80 px-6 py-2 rounded hover:bg-green-100 hover:text-green-900 transition-colors">
        Criar Categoria
      </Link>
    </div>
  );
}