import { useEffect, useState } from 'react';
import './Producto.css';


import { Link } from 'react-router-dom';
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
    const [filtroPrecio, setFiltroPrecio] = useState<string>('');//precio fijo
    const [busquedaTexto, setBusquedaTexto] = useState<string>('');
    const [precioMax, setPrecioMax] = useState<string>('');

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const datosProductos = await obtenerProductosDesdeBaseDeDatos();
                setProductos(datosProductos);
            } catch (error) {
                console.error('Error al obtener los productos', error);

            }
        };
        fetchProductos();
      }, []);

      const productosFiltrados = productos
      .filter(producto => producto.categoria.includes(filtroCategoria))
      .filter(producto => filtroPrecio === '' || producto.precio <= parseFloat(filtroPrecio))
      .filter(producto => busquedaTexto === '' || producto.nombre.toLowerCase().includes(busquedaTexto.toLowerCase()) || producto.descripcion.toLowerCase().includes(busquedaTexto.toLowerCase()));


      const productosPorPagina = 10;
      const [paginaActual, setPaginaActual] = useState<number>(1);
      const indiceInicial = (paginaActual - 1) * productosPorPagina;
      const indiceFinal = indiceInicial + productosPorPagina;
      const productosPaginados = productosFiltrados.slice(indiceInicial, indiceFinal);

      const cambiarPagina = (numeroPagina: number) => {
        setPaginaActual(numeroPagina);
      };

      const handleBusquedaChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setBusquedaTexto(evento.target.value);
      };

      const handlePrecioMaxChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setPrecioMax(evento.target.value);
      };

      //obtiene los productos de la bd
      async function obtenerProductosDesdeBaseDeDatos(): Promise<Producto[]> {
        const response = await fetch('http://firebase.google.com/');
        const data = await response.json();
        return data;
    }
    

      
    return (
       
        <div className="productos">
            <div className='busquedaYfiltros'>
                <input 
                    type='text' 
                    placeholder='Buscar producto' 
                    value={busquedaTexto}
                    /* onChange={(evento) => setBusquedaTexto(evento.target.value)} */
                    onChange={handleBusquedaChange}
                />
                <select onChange={(evento) => setFiltroCategoria(evento.target.value)}>
                    <option value=''>Todas las categorías</option>
                    <option value='categoria1'>Categoría 1</option>
                    <option value='categoria2'>Categoría 2</option>
                </select>
                <input 
                    type='number' 
                    placeholder='Precio máximo' 
                    value={precioMax}
                   /*  onChange={(evento) => setPrecioMax(evento.target.value)} */
                    onChange={handlePrecioMaxChange}

                />
                <button>Buscar</button>
            </div>

            <div className="lista-productos">
                {productosPaginados.map((producto) => (
                <div key={producto.id} className="producto">
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                    {/* <p>Categoría: {producto.categoria}</p> */}
                    <p>Descripción: {producto.descripcion}</p>
                    <Link to={`/detalles/${producto.id}`}>Ver detalles</Link>
                </div>
                ))}
            </div>

            <div className="paginacion">
                <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
                    Anterior
                </button>
                {Array.from({ length: Math.ceil(productosFiltrados.length / productosPorPagina) }, (_, index) => (
                <button key={index + 1} onClick={() => cambiarPagina(index + 1)}>{index + 1}</button>
                ))}
                <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === Math.ceil(productosFiltrados.length / productosPorPagina)}>
                    Siguiente
                </button>

            </div>

            {/* <button aria-label="Ir a la siguiente página" onClick={() => cambiarPagina(paginaActual + 1)}></button> */}
            {/* <button aria-label="Ir a la página anterior" onClick={() => cambiarPagina(paginaActual - 1)}></button> */}
            <button aria-label="Ir a la primera página" onClick={() => cambiarPagina(1)}>Primera</button>
            <button aria-label="Ir a la última página" onClick={() => cambiarPagina(Math.ceil(productosFiltrados.length / productosPorPagina))}>Última</button>

        </div>
        
    );
}

export default Producto;

function obtenerProductosDesdeBaseDeDatos(): Producto[] {
    //array de ejemplo:
    return [
        { id: 1, nombre: 'Producto 1', precio: 20.99, categoria: 'categoria1', descripcion: 'Descripción del producto 1' },
        { id: 2, nombre: 'Producto 2', precio: 15.49, categoria: 'categoria2', descripcion: 'Descripción del producto 2' },
        { id: 3, nombre: 'Producto 3', precio: 10.99, categoria: 'categoria1', descripcion: 'Descripción del producto 3' },
        { id: 4, nombre: 'Producto 4', precio: 5.49, categoria: 'categoria2', descripcion: 'Descripción del producto 4' },
        { id: 5, nombre: 'Producto 5', precio: 25.99, categoria: 'categoria1', descripcion: 'Descripción del producto 5' }
    ];
}
