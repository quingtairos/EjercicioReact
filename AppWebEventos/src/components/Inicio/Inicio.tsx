import './Inicio.css';


//import { Link } from 'react-router-dom';

//import fest from './assets/img/fest.jpeg';

//import GestionEventosPagina from '../';

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

                        <p>Si quieres ver los productos destacados, haz click en el botón "Productos destacados".</p>
                        <p>Si quieres ver los productos más vendidos, haz click en el botón "Productos más vendidos".</p>
                        <p>Si quieres ver los productos más buscados, haz click en el botón "Productos más buscados".</p> 

                        <a href={"../DetalleProducto/DetalleProducto.tsx"}>Ver detalles</a>
                    </div>
            </div>
        )
    };

export default Inicio;