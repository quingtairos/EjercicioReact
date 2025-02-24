import './App.css';

import Inicio from './components/Inicio/Inicio';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import React from 'react';

import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto/DetalleProducto';
import Footer from './components/Footer';
import Header from './components/Header';
import IniciarSesion from './components/Login/Login';
import Registro from './components/Registro/Registro';

const App: React.FC = () => {
  //const [count, setCount] = useState(0)

  return (
  
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          {/* <p>Contenido principal de la web.</p> */}
          <Router>
            <Routes>
              <Route path="/" element={< Inicio />} />
              <Route path="/producto/:id" element={<DetalleProducto /* match={undefined} */ />} />
              <Route path="/carrito" Component={Carrito} />
              <Route path="/iniciar-sesion" element={<IniciarSesion />} />
              <Route path="/registro" element={<Registro />} />
            </Routes>
          </Router>
        </main>
        <Footer />
      </div>
        
  );
}


export default App;