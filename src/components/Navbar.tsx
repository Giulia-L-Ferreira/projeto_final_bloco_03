import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
      <h1><Link to="/Home"className="text-2xl font-bold">Farmácia</Link></h1>
      <ul className="flex space-x-6">
        <li><Link to="/listar" className="hover:text-green-300">Categoria</Link></li>
        <li><Link to="/criar" className="hover:text-green-300">Cadastrar categoria</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar