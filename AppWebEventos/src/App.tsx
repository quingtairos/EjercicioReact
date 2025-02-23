import './App.css';

import Inicio from './components/Inicio/Inicio';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import React from 'react';
import DetalleProducto from './components/DetalleProducto/DetalleProducto';
import IniciarSesion from './components/Login/Login';

const App: React.FC = () => {
  //const [count, setCount] = useState(0)

  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={< Inicio />} />
          <Route path="/producto/:id" element={<DetalleProducto /* match={undefined} */ />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        </Routes>
      </div>
    </Router>
  
  );
}


export default App;