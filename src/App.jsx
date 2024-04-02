import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";

import InicioW from "./componentes/InicioW/InicioW";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import BtnUp from "./componentes/BtnUp/BtnUp";
import Carrousel from "./componentes/carrusel/Carrousel";
import Contacto from "./componentes/Contacto/Contacto";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<InicioW />} />

        <Route
          path="/catalogo"
          element={<ItemListContainer saludo=" Nuestros Productos" />}
        />
        <Route
          path="/Servicios"
          element={<Carrousel />}
        />
        <Route
          path="/Contactanos"
          element={<Contacto saludo=" Comunicate con Nosotros" />}
        />
      </Routes>
      <BtnUp />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
