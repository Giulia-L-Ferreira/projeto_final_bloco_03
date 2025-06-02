import { ToastContainer } from "react-toastify";
import DeletarCategoria from "./components/categorias/DeletarCategoria";
import FormCategoria from "./components/categorias/FormCategorias";
import Footer from "./components/Footer"
import Home from "./components/Home"
import ListarCategorias from "./components/ListarCategorias";
<Route path="/listar" element={<ListarCategorias />} />
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router";

function App() {

  return (
    <>
    
    <BrowserRouter>
    <ToastContainer />
    <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/deletar/:id" element={<DeletarCategoria />} />
        <Route path="/listar" element={<ListarCategorias />} />
        <Route path="/criar" element={<FormCategoria />} />
        <Route path="/editar/:id" element={<FormCategoria />} />
      </Routes>
            <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
