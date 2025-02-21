import { useState } from 'react';
import './App.css';

import DetalleProducto from './components/DetalleProducto/DetalleProducto';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Login from './components/Login/Login';
import Productos from './components/Productos';
import Registro from './components/Registro/Registro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header />
        <Inicio />
        <Productos />

        <DetalleProducto />

        <Login />

        <Registro />
        
        <Footer />
      </div>
    </>
  );
}


export default App;