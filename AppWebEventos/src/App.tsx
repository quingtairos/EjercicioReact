import './App.css';

import Inicio from './components/Inicio/Inicio';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Producto } from './types/Producto';

import React, { useEffect, useState } from 'react';

import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto/';
import Footer from './components/Footer';
import Header from './components/Header';
import IniciarSesion from './components/Login';
//import { getProductos } from './components/Productos';
import Registro from './components/Registro';

import Productos from './components/Productos';

import { collection, DocumentData, getDocs } from 'firebase/firestore';

import { QuerySnapshot } from 'firebase/firestore/lite';
import Eventos from './components/Eventos';
import { db } from './firebase/firebaseConfig';

/* const getProductos = async (): Promise<Producto[]> => {
  try {
    const productosSnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'productos'));
    const productosList: Producto[] = productosSnapshot.docs.map(doc => doc.data() as Producto);
    return productosList;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return [];
  }
}; */

const getProductos = async (): Promise<Productos[]> => {
  try {
    const productosSnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'productos'));
    const productosList: Producto[] = productosSnapshot.docs.map(doc => doc.data() as Producto);
    return productosList;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error; 
  }
};

/* const getProductos = async (): Promise<Producto[]> => {
  try {
    const productosSnapshot = await getDocs(collection(db, 'productos'));
    const productosList: Producto[] = productosSnapshot.docs.map(doc => doc.data() as Producto);
    return productosList;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error; 
  }
};
 */


const App: React.FC = () => {
  //const [count, setCount] = useState(0)
  const [productos, setProductos] = useState<Productos[]>([]);

  const [loading, setLoading] = useState<boolean>(true);  
  const [error, setError] = useState<string | null>(null);


 /*  useEffect(() => {
    const fetchProductos = async () => {
      const productosData = await getProductos();
      setProductos(productosData);
    };
    
    fetchProductos();
  }, []); */

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosData = await getProductos();
        setProductos(productosData);
        setError(null);  
      } catch (error) {
        setError('No se pudieron obtener los productos. Intenta nuevamente más tarde.');
      } finally {
        setLoading(false);  
      }
    };
    cargarProductos();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (productos.length === 0) {
    return (
      <div className="App">
      {/*   <header>
          <Header />
        </header> */}
       {/*  <main> */}
          {/* <p>Contenido principal de la web.</p> */}
          <Router>
            <Header />
            <div>No hay productos disponibles.</div>;
            <Routes>
              <Route path="/" element={< Inicio />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/producto/:id" element={<DetalleProducto /* match={undefined} */ />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/iniciar-sesion" element={<IniciarSesion />} />
              <Route path="/registro" element={<Registro />} />
              <Route path='/eventos' element={<Eventos />} />
            </Routes>
            <Footer />
          </Router>
        {/* </main> */}
       

       {/*  <footer>
          <Footer />
        </footer> */}
      </div>

      
    );
  }

  
};


export default App;

/* function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
} */
