import { Link } from 'react-router-dom';
import './Inicio.css';


import React, { useEffect, useState } from 'react';
import { collection, db, getDocs } from '../../firebase/firebaseConfig';
import { Producto } from '../../types/Producto';


import festEvento from '../../assets/img/fest.jpeg';

//import 'firebase/firestore';


//import fest from './assets/img/fest.jpeg';

//AÑADIR UN PRODUCTO A LA BASE DE DATOS
/* db.collection('Productos').add({
    categoria: 'fiesta',
    id: 'nuevoProducto123',
    nombre: 'Nuevo Producto',
    precio: 50,
    descripcion: 'Un producto nuevo para fiestas',
    imagen: 'https://via.placeholder.com/150'
  }).then(() => {
    console.log('Documento añadido correctamente');
  }).catch((error: any) => {
    console.error('Error al añadir el documento: ', error);
  });; */
  

/*   if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } */

    //const db = firebase.firestore();

    const Inicio: React.FC = () => {

      /*  useEffect(() => {
            const addProducto = async () => {
              try {
                await addDoc(collection(db, 'Productos'), {
                    categoria: 'fiesta',
                    id: 'nuevoProducto123',
                    nombre: 'Nuevo Producto',
                    precio: 50,
                    descripcion: 'Un producto nuevo para fiestas',
                    //imagen: 'https://example.com/nuevo_producto.jpg'
            });//.then(() => {
              console.log('Documento añadido correctamente');
            } catch (error) {
              console.error('Error al añadir el documento: ', error);
            }
          };

            addProducto();
        }, []); */

        /* const productosDestacados = [
            { id: 1, nombre: 'Producto 1', precio: 20.99 },
            { id: 2, nombre: 'Producto 2', precio: 15.49 },
            { id: 3, nombre: 'Producto 3', precio: 10.99 },
            { id: 4, nombre: 'Producto 4', precio: 5.49 },
            { id: 5, nombre: 'Producto 5', precio: 25.99 }
        ]; */

        const [productosDestacados, setProductos] = useState<Producto[]>([]);
        const [loading, setLoading] = useState(true);
       

        useEffect(() => {
          const obtenerProductosDestacados = async () => {
              try {
                  const productosCollection = collection(db, 'Productos');
                  const productosSnapshot = await getDocs(productosCollection);
                  const productosList = productosSnapshot.docs.map((doc) => {
                      const data = doc.data() as Producto;
                      return {
                          id: doc.id,
                          ...data,  
                      };
                  }).filter((producto) => producto.destacado); 
                  setProductos(productosList);
              } catch (error) {
                  console.error('Error al obtener productos:', error);
              } finally {
                  setLoading(false);
              }
          };
      
          obtenerProductosDestacados();
      }, []);
      

    if (loading) {
        return <div>Cargando productos...</div>;
    }

        return(

            
            <div className="Inicio">
                <div className='descripcion-tienda'>
                    <h1>Bienvenido a AppWebEventos</h1>
                        <h2>Sitio de gestión de eventos</h2> 
                        
                        <p>Aquí podrás ver los eventos que se han creado y gestionarlos.</p>
                        
                        <p>
                            Además aquí encontrarás todo lo que necesitas para organizar tus eventos especiales.
                            ¡Descubre nuestra selección de productos y haz que tus celebraciones sean inolvidables!
                        </p>
                </div>

                    <div className="productos-destacados">
                        <h2>Productos destacados</h2>

                        {productosDestacados.length === 0 ? (
                          <p>No hay productos disponibles.</p>
                          ) : (
                            <div className="listaproductos">
                            {productosDestacados.map((producto) => (
                            <div key={producto.id} className="producto">
                                <h3>{producto.nombre}</h3>
                                <p>Precio: ${producto.precio}</p>
                                {/* <a href={`/detalles/${producto.id}`}>Ver detalles</a> */}
                                
                              
                                <Link to={`/detalles/${producto.id}`}>Ver detalles</Link>

                            </div>
                            ))}
                        </div>
                          )}

                        <h2>Eventos</h2>
        
                            <div className="eventos">
                                Tenemos varios tipos de eventos.
                                Algunos de los más solicitados son:
                                <p>
                                <img src={festEvento} alt="festivales" />

                                FESTIVALES
                                <br />
                                <small>de todo tipo</small>
                                    <br />
                                CONCIERTOS
                                <br />
                                Bodas 
                                <br />
                                <small>y celebración de fiestas de boda</small>
                                <br />
                                Servicio de Catterin
                                </p>
                                </div>

                                            <p>Si quieres ver los productos destacados, haz click en el botón "Productos destacados".</p>
                                            <p>Si quieres ver los productos más vendidos, haz click en el botón "Productos más vendidos".</p>
                                            <p>Si quieres ver los productos más buscados, haz click en el botón "Productos más buscados".</p> 

                                        </div>

                                        <div className="store-map">
                                          <h3>Visítanos en:</h3>
                                          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d11607.448109511246!2d-8.364509641897033!3d43.33807614451293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2ses!4v1741864437023!5m2!1ses!2ses" 
                                          width="600" height="450" style={{ border: 0 }} loading="lazy"> </iframe>
                                        </div>

                                </div>
                                
        )
    };

export default Inicio;