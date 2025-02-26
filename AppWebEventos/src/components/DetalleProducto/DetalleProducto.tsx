import React from 'react';
import { Producto } from '../../types/Productos';
import './DetalleProducto.css';


import { Link, useParams } from 'react-router-dom';

const DetalleProducto: React.FC = ( /* { match } */) => {
    const { id } = useParams<{ id: string }>();
    
    const producto: Producto = {
        id: id,//1,
        nombre: 'Producto ' + id,
        precio: 25.99,
        descripcion: 'Descripción del producto ' + id,
        /* imagen: 'https://picsum.photos/200/300',*/
    };

    const agregarAlCarrito: React.MouseEventHandler<HTMLButtonElement> = (/* event */) => {
        
        console.log(`Producto ${producto.nombre} agregado al carrito.`);
    };

    return (
        <div className="DetallesProducto">
            <h1>DetalleS del producto</h1>
            <h2>{producto.nombre}</h2>
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