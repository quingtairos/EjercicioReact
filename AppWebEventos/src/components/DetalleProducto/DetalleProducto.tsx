import './DetalleProducto.css';

function DetalleProducto() {
    
    const producto = {
        id: id,//1,
        nombre: 'Producto ' + id,
        precio: 25.99,
        descripcion: 'Descripción del producto ' + id,
        /* imagen: 'https://picsum.photos/200/300',*/
    };

    return (
        <div className="container">
            <h1>Detalle del producto</h1>

        </div>
    );
}

export default DetalleProducto;