import React, { useEffect, useState } from 'react';
import './Producto.css';

import { Producto } from '../../types/Producto';

import { db } from '../../firebase/firebaseConfig';



import { Link } from 'react-router-dom';

/* const getProductos = async (): Promise<Producto[]> => {
    try {
      const productosSnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'productos'));
      const productosList: Producto[] = productosSnapshot.docs.map(doc => doc.data() as Producto);
      return productosList;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return [];
    }
  }; */

const Producto: React.FC = (/* datosProductos: void */) => {
    
    const [productos, setProductos] = useState<Producto[]>([]);

    //const [productos, setProductos] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState<string>('');
    const [filtroPrecio, setFiltroPrecio] = useState<string>('');//precio fijo
    const [busquedaTexto, setBusquedaTexto] = useState<string>('');
    const [precioMax, setPrecioMax] = useState<string>('');

    //const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]);

    /* useEffect(() => {
        const cargarProductos = async () => {
          const productosData = await getProductos();
          setProductos(productosData);
        };
        cargarProductos();
      }, []); */

      useEffect(() => {
        const fetchProductos = async () => {
            const productosSnapshot = await db.collection('productos').get();
            const productosList: Producto[] = productosSnapshot.docs.map((doc: { id: any; data: () => any; }) => ({
                id: doc.id,
                ...doc.data(),
            })) as Producto[];
            setProductos(productosList);
        };

        fetchProductos();
    }, []);

      /*const getProductos = async (): Promise<Producto[]> => {
        try {
          const productosSnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'productos'));
          const productosList: Producto[] = productosSnapshot.docs.map(doc => doc.data() as Producto);
          return productosList;
        } catch (error) {
          console.error('Error al obtener los productos:', error);
          return [];
        }
      };

    /* useEffect(() => {
        const fetchProductos = async () => {
            try {
                const datosProductos = await obtenerProductosDesdeBaseDeDatos();
                setProductos(datosProductos);
            } catch (error) {
                console.error('Error al obtener los productos', error);

            }
        };
        fetchProductos();
      }, []); */

      /* useEffect(() => {
        const cargarProductos = async () => {
          const datos = await obtenerProductosDesdeBaseDeDatos();
          setProductos(datos);
        };
        cargarProductos();
      }, []); */
      

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

      /* const obtenerProductosDesdeBaseDeDatos = async () => {
        const productosCollection = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCollection);
        const productosList = productosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        return productosList;
      }; */
      

      /*
      async function obtenerProductosDesdeBaseDeDatos(): Promise<Producto[]> {
        const response = await fetch('https://console.firebase.google.com/u/0/project/app-auth-web/firestore');
        const data = await response.json();
        return data;
    }
    
        /* const getProductos = async (): Promise<Producto[]> => {
            try {
              const productosSnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, "productos"));
              const productosList: Producto[] = productosSnapshot.docs.map(doc => doc.data() as Producto);
              return productosList;
            } catch (error) {
              console.error("Error al obtener los productos:", error);
              return [];
            }
          }; */



//export { getProductos };
          

      
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

            {/* <div className="lista-productos">
                {productosPaginados.map((producto) => (
                <div key={producto.id} className="producto">
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                    {/* <p>Categoría: {producto.categoria}</p> */}
                    {/* <p>Descripción: {producto.descripcion}</p>
                    <Link to={`/detalles/${producto.id}`}>Ver detalles</Link>
                </div>
                ))}
            </div> */}

            <div className="lista-productos">
                    {/* {productosPaginados.map((producto) => ( */}
                    {productos.map((producto) => (
                    <div key={producto.id} className="producto">
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <p>Descripción: {producto.descripcion}</p>
                        <Link to={`/producto/${producto.id}`}>Ver detalles</Link>
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

/* export const getProductos = async (): Promise<Producto[]> => {
    try {
      const productosSnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'productos'));
      const productosList: Producto[] = productosSnapshot.docs.map(doc => doc.data() as Producto);
      return productosList;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return [];
    }
  }; */

export default Producto;

/* function obtenerProductosDesdeBaseDeDatos(): Producto[] {
    //array de ejemplo:
    return [
        { id: 1, nombre: 'Producto 1', precio: 20.99, categoria: 'categoria1', descripcion: 'Descripción del producto 1' },
        { id: 2, nombre: 'Producto 2', precio: 15.49, categoria: 'categoria2', descripcion: 'Descripción del producto 2' },
        { id: 3, nombre: 'Producto 3', precio: 10.99, categoria: 'categoria1', descripcion: 'Descripción del producto 3' },
        { id: 4, nombre: 'Producto 4', precio: 5.49, categoria: 'categoria2', descripcion: 'Descripción del producto 4' },
        { id: 5, nombre: 'Producto 5', precio: 25.99, categoria: 'categoria1', descripcion: 'Descripción del producto 5' }
    ];
} */
