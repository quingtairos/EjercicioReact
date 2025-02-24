import './Carrito.css';

function Carrito() {
    
        const productosEnCarrito = [
            { id: 1, nombre: 'Producto 1', precio: 20.99 },
            { id: 2, nombre: 'Producto 2', precio: 15.49 },
            { id: 3, nombre: 'Producto 3', precio: 10.99 },
            { id: 4, nombre: 'Producto 4', precio: 5.49 },
            { id: 5, nombre: 'Producto 5', precio: 25.99 }
        ];
    
        const eliminarDelCarrito = (id: number) => {
            
            console.log(`Producto con ID ${id} eliminado del carrito.`);
        };
    
  function calcularPrecioTotal(): import("react").ReactNode {
    throw new Error('Function not implemented.');
  }

        return (
            <div className="carrito">
                <h2>Carrito</h2>
                <ul>
                    <li>Producto 1</li>
                    <li>Producto 2</li>
                    <li>Producto 3</li>
                    <li>Producto 4</li>
                    <li>Producto 5</li>
                </ul>
                <p>Total: $80</p>

                {productosEnCarrito.length === 0 ? (
        <p>El carrito está vacío.</p>
          ) : (
            <>
              <div className="lista-productos">
                {productosEnCarrito.map((producto) => (
                  <div key={producto.id} className="producto-en-carrito">
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                    
                      <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                    </div>
                ))}
              </div>
              <p>precio Total: ${calcularPrecioTotal()}</p>
            </>
          )}
    </div>
  );
        

}

export default Carrito;