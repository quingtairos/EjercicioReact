import { Link } from 'react-router-dom';
import './Inicio.css';



//import { Link } from 'react-router-dom';

//import fest from './assets/img/fest.jpeg';


    const Inicio = () => {

        const productosDestacados = [
            { id: 1, nombre: 'Producto 1', precio: 20.99 },
            { id: 2, nombre: 'Producto 2', precio: 15.49 },
            { id: 3, nombre: 'Producto 3', precio: 10.99 },
            { id: 4, nombre: 'Producto 4', precio: 5.49 },
            { id: 5, nombre: 'Producto 5', precio: 25.99 }
        ];

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

                        <h2>Eventos</h2>
        
                            <div className="eventos">
                                Tenemos varios tipos de eventos.
                                Algunos de los más solicitados son:
                                <p>
                                <img src="../../assets/img/fest.jpeg" alt="festivales" />
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
                                </div>
        )
    };

export default Inicio;