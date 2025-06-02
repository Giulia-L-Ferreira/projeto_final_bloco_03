import CriarCategoria from "./components/CriarCategoria";
import Footer from "./components/Footer"
import Home from "./components/Home"
import ListarCategorias from "./components/ListarCategorias";
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router";

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/criar" element={<CriarCategoria />} />
        <Route path="/listar" element={<ListarCategorias />} />
      </Routes>
            <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
