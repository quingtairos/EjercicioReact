import './DetalleProducto.css';

import { Link } from 'react-router-dom';

function DetalleProducto( { match }) {
    const { id } = match.params;
    
    const producto = {
        id: id,//1,
        nombre: 'Producto ' + id,
        precio: 25.99,
        descripcion: 'Descripción del producto ' + id,
        /* imagen: 'https://picsum.photos/200/300',*/
    };

    const agregarAlCarrito = () => {
        
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
}

export default DetalleProducto;