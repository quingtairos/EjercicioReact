import './App.css';

import Inicio from './components/Inicio/Inicio';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import React, { useEffect, useState } from 'react';

import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto/';
import Footer from './components/Footer';
import Header from './components/Header';
import IniciarSesion from './components/Login';
import Producto from './components/Productos';
import { getProductos } from './components/Productos/Producto';
import Registro from './components/Registro';

const App: React.FC = () => {
  //const [count, setCount] = useState(0)
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const productosData = await getProductos();
      setProductos(productosData);
    };
    
    fetchProductos();
  }, []);

  return (
  
      <div className="App">
      {/*   <header>
          <Header />
        </header> */}
       {/*  <main> */}
          {/* <p>Contenido principal de la web.</p> */}
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={< Inicio />} />
              <Route path="/productos" element={<Producto />} />
              <Route path="/producto/:id" element={<DetalleProducto /* match={undefined} */ />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/iniciar-sesion" element={<IniciarSesion />} />
              <Route path="/registro" element={<Registro />} />
            </Routes>
            <Footer />
          </Router>
        {/* </main> */}

       {/*  <footer>
          <Footer />
        </footer> */}
      </div>
        
  );
};


export default App;

/* function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
} */
