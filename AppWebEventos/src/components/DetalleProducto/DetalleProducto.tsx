import React, { useEffect, useState } from 'react';
import { Producto } from '../../types/Producto';
import './DetalleProducto.css';

import { db } from '../../firebase/firebaseConfig';

import { doc, getDoc } from 'firebase/firestore';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth.ts';

const DetalleProducto: React.FC = ( /* { match } */) => {
    const { id } = useParams<{ id: string }>();

    const { isAuthenticated, user } = useAuth();

    const [producto, setProducto] = useState<Producto | null>(null);

    const navigate = useNavigate();
    
    /* const producto: Producto = {
        id: id,//1,
        nombre: 'Producto ' + id,
        precio: 25.99,
        descripcion: 'Descripción del producto ' + id,
        /* imagen: 'https://picsum.photos/200/300',*/
//  }; */

    useEffect(() => {
        const obtenerProducto = async () => {
          if (id) {
            try {
              const docRef = doc(db, 'Productos', id);
              const docSnap = await getDoc(docRef);
    
              if (docSnap.exists()) {
                setProducto(docSnap.data() as Producto);
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

      

    //const agregarAlCarrito: React.MouseEventHandler<HTMLButtonElement> = (/* event */) => {
    const agregarAlCarrito = async () => {   
/* console.log(`Producto ${producto.nombre} agregado al carrito.`);*/
        if (!isAuthenticated) {
            navigate('/iniciar-sesion');
        } else {
          if (producto) {
            try {
              const carritoRef = doc(db, 'carrito', user?.uid || '')
              const docSnap = await getDoc(carritoRef);

              console.log(`Producto ${producto?.nombre} agregado al carrito.`);

            } 
          } catch (error) {
            console.error('Error al agregar el producto al carrito: ', error);
          }
            //console.log(`Producto ${producto?.nombre} agregado al carrito.`);
        }
    };

    if (!producto) {
        return <div>Cargando producto...</div>;
      }

    return (
        <div className="DetallesProducto">
            <h1>DetalleS del producto</h1>
            <h2>{producto.nombre}</h2>
            {/* <img src={producto.imagen} alt={producto.nombre} /> */}
            {producto.imagen && <img src={producto.imagen} alt={producto.nombre} />}
            <p><strong>Precio: </strong>${producto.precio}</p>
            <p><strong>Descripcion: </strong>{producto.descripcion}</p> 
            {producto.categoria && <p><strong>Categoría:</strong> {producto.categoria}</p>}
           
            <div className="acciones">
                {isAuthenticated ? (
                    <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
                ) : (
                    <div>
                        <Link to="/iniciar-sesion" className='btn btn-primary' >Iniciar Sesión para Comprar</Link>
                    </div>
                    
                )}                
            </div>
        </div>
            

        
    );
};

export default DetalleProducto;
