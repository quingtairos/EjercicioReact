import { useEffect, useState } from 'react';
import './Producto.css';



import { Producto } from '../../types/Producto';

function Producto(/* datosProductos: void */) {
    
    const [productos, setProductos] = useState<Producto[]>([
        /* { id: 1, nombre: 'Producto 1', precio: 20.99 },
        { id: 2, nombre: 'Producto 2', precio: 15.49 },
        { id: 3, nombre: 'Producto 3', precio: 10.99 },
        { id: 4, nombre: 'Producto 4', precio: 5.49 },
        { id: 5, nombre: 'Producto 5', precio: 25.99 } */
    ]);

    //const [productos, setProductos] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState<string>('');
    const [filtroPrecio, setFiltroPrecio] = useState<string>('');
    const [busquedaTexto, setBusquedaTexto] = useState<string>('');

    useEffect(() => {
        const datosProductos = obtenerProductosDesdeBaseDeDatos();
        setProductos(datosProductos);
      }, []);

      const productosFiltrados = productos
      .filter(producto => producto.categoria.includes(filtroCategoria))
      .filter(producto => filtroPrecio === '' || producto.precio <= parseInt(filtroPrecio))
      .filter(producto => busquedaTexto === '' || producto.nombre.toLowerCase().includes(busquedaTexto.toLowerCase()) || producto.descripcion.toLowerCase().includes(busquedaTexto.toLowerCase()));


      const productosPorPagina = 10;
      const [paginaActual, setPaginaActual] = useState<number>(1);
      const indiceInicial = (paginaActual - 1) * productosPorPagina;
      const indiceFinal = indiceInicial + productosPorPagina;
      const productosPaginados = productosFiltrados.slice(indiceInicial, indiceFinal);

      const cambiarPagina = (numeroPagina: number) => {
        setPaginaActual(numeroPagina);
      };

      
    return (
       
        <div className="productos">
            <div className='busqueda/filtros'>
                <input 
                    type='text' 
                    placeholder='Buscar producto' 
                    value={busquedaTexto}
                    onChange={(evento) => setBusquedaTexto(evento.target.value)}
                />
                <select>
                    <option value=''>Todas las categorías</option>
                    <option value='categoria1'>Categoría 1</option>
                    <option value='categoria2'>Categoría 2</option>
                </select>
                <input 
                    type='number' 
                    placeholder='Precio máximo' 
                    value={precioMax}
                />
                <button>Buscar</button>
            </div>

            <div className="lista-productos">
                {productosPaginados.map((producto) => (
                <div key={producto.id} className="producto">
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                    <p>Categoría: {producto.categoria}</p>
                    <p>Descripción: {producto.descripcion}</p>
                    <Link to={`/detalles/${producto.id}`}>Ver detalles</Link>
                </div>
                ))}
            </div>

            <div className="paginacion">
                {Array.from({ length: Math.ceil(productosFiltrados.length / productosPorPagina) }, (_, index) => (
                <button key={index + 1} onClick={() => cambiarPagina(index + 1)}>{index + 1}</button>
                ))}
            </div>

        </div>
        
    );
}

export default Producto;

function obtenerProductosDesdeBaseDeDatos() {
    throw new Error('Function not implemented.');
}
