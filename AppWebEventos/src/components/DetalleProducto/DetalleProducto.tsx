import React, { useEffect, useState } from 'react';
import { Producto } from '../../types/Producto';
import './DetalleProducto.css';

import { db } from '../../firebase/firebaseConfig';

import { doc, getDoc } from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';

const DetalleProducto: React.FC = ( /* { match } */) => {
    const { id } = useParams<{ id: string }>();
    
    /* const producto: Producto = {
        id: id,//1,
        nombre: 'Producto ' + id,
        precio: 25.99,
        descripcion: 'Descripción del producto ' + id,
        /* imagen: 'https://picsum.photos/200/300',*/
//  }; */

    const [producto, setProducto] = useState<Producto | null>(null);

    useEffect(() => {
        const obtenerProducto = async () => {
          if (id) {
            try {
              const docRef = doc(db, 'Productos', id);
              const docSnap = await getDoc(docRef);
    
              if (docSnap.exists()) {
                setProducto(docSnap.data());
              } else {
                console.log('No se encontró el producto');
              }
            } catch (error) {
              console.error('Error al obtener el producto: ', error);
            }
          }
        };
    
        obtenerProducto();
      }, [id]);

      

    const agregarAlCarrito: React.MouseEventHandler<HTMLButtonElement> = (/* event */) => {
        
        console.log(`Producto ${producto.nombre} agregado al carrito.`);
    };

    if (!producto) {
        return <div>Cargando producto...</div>;
      }

    return (
        <div className="DetallesProducto">
            <h1>DetalleS del producto</h1>
            <h2>{producto.nombre}</h2>
            {/* <img src={producto.imagen} alt={producto.nombre} /> */}
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p> 
           
            <div className="acciones">
                <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
                
                <Link to="/iniciar-sesion">Iniciar Sesión para Comprar</Link>
            </div>
        </div>
            

        
    );
};

export default DetalleProducto;