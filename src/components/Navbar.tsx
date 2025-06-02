import React from 'react'

function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Farmácia</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-green-300">Home</a></li>
        <li><a href="#" className="hover:text-green-300">Produtos</a></li>
        <li><a href="#" className="hover:text-green-300">Contato</a></li>
      </ul>
    </nav>
  )
}

export default Navbar