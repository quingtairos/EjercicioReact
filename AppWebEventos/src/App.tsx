import './App.css';

import Inicio from './components/Inicio/Inicio';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import React from 'react';
import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto/DetalleProducto';
import Header from './components/Header';
import IniciarSesion from './components/Login/Login';
import Registro from './components/Registro';

const App: React.FC = () => {
  //const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={< Inicio />} />
          <Route path="/producto/:id" element={<DetalleProducto /* match={undefined} */ />} />
          <Route path="/carrito" Component={Carrito} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/registrarse" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  
  );
}


export default App;