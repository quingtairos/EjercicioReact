import './DetalleProducto.css';

import { Link } from 'react-router-dom';

function DetalleProducto() {
    
    const producto = {
        id: id,//1,
        nombre: 'Producto ' + id,
        precio: 25.99,
        descripcion: 'Descripción del producto ' + id,
        /* imagen: 'https://picsum.photos/200/300',*/
    };

    return (
        <div className="DetallesProducto">
            <h1>DetalleS del producto</h1>
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
            
            {/* Verificar si el usuario está autenticado */}
            <div className="acciones">
            <Link to="/iniciar-sesion">Iniciar Sesión para Comprar</Link>
            </div>
        </div>
            

        
    );
}

export default DetalleProducto;