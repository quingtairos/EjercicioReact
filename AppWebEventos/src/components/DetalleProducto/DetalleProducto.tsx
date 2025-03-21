import React, { useEffect, useState } from 'react';
import { Producto } from '../../types/Producto';
import './DetalleProducto.css';

import { db } from '../../firebase/firebaseConfig';

import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getAuth } from 'firebase/auth';
import { useAuth } from '../../hooks/useAuth.ts';

const DetalleProducto: React.FC = ( /* { match } */) => {
    const { id } = useParams<{ id: string }>();

    const { isAuthenticated, user } = useAuth();

    const [producto, setProducto] = useState<Producto | null>(null);

    const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
    

    const navigate = useNavigate();
    
    /* const producto: Producto = {
        id: id,//1,
        nombre: 'Producto ' + id,
        precio: 25.99,
        descripcion: 'Descripción del producto ' + id,
        /* imagen: 'https://picsum.photos/200/300',*/
//  }; */

    useEffect(() => {

                const auth = getAuth();
                setUsuarioAutenticado(!!auth.currentUser);
                
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
          console.log({producto, user})
          if (producto && user) {
            //console.log(`${producto.nombre} agregado al carrito.`);
            try {
              const carritoRef = doc(db, 'carrito', user.uid || '')
              const docSnap = await getDoc(carritoRef);

              if (docSnap.exists()) {
                const carritoData = docSnap.data();
                const productosActualizados = [...carritoData.productos, producto];
                await updateDoc(carritoRef, { productos: productosActualizados });
              } else {
                await setDoc(carritoRef, { productos: [producto] });//ESTABLCEMOS EL CARRITO INICIAL CON SET
              }

              console.log(`Producto ${producto.nombre} agregado al carrito.`);

            }  catch (error) {
              console.error('Error al agregar el producto al carrito: ', error);
            }
          }
            //console.log(`Producto ${producto?.nombre} agregado al carrito.`);
        }
    };

    if (!producto) {
        return <div>Cargando producto...</div>;
      }

    return (
        <div className="DetallesProducto">
            <h1>Detalles del producto</h1>
            <h2>{producto.nombre}</h2>
            {/* <img src={producto.imagen} alt={producto.nombre} /> */}
            {producto.imagen && <img src={producto.imagen} alt={producto.nombre} />}
            <p><strong>Precio: </strong>${producto.precio}</p>
            <p><strong>Descripcion: </strong>{producto.descripcion}</p> 
            {producto.categoria && <p><strong>Categoría:</strong> {producto.categoria}</p>}
           
            <div className="acciones">
                {usuarioAutenticado ? (
                    <Link to={`/producto/${producto.id}`} className="btn btn-primary">
                      Ver detalles
                    </Link>
                    ) : (
                    <Link to="/iniciar-sesion" className="btn btn-primary">
                      Inicia sesión para ver detalles
                    </Link>
                    )}               
            </div>
        </div>
            

        
    );
};

export default DetalleProducto;
