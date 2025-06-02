import { useState } from "react";

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
    <main className="flex flex-col items-center p-8 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Cadastro de Produto</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-xl space-y-4"
      >
        <div>
          <label className="block text-green-900 font-semibold mb-1">Nome do Produto</label>
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label className="block text-green-900 font-semibold mb-1">Descrição</label>
          <textarea
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label className="block text-green-900 font-semibold mb-1">Preço (R$)</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label className="block text-green-900 font-semibold mb-1">Categoria</label>
          <input
            type="text"
            name="categoria"
            value={produto.categoria}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          cadastrar Produto
        </button>
      </form>
    </main>
  );
}