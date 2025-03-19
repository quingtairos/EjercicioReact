import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import { Producto } from '../../types/Producto';
import './Producto.css';

const ProductoComponent: React.FC = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);
    const [pagina, setPagina] = useState(1);
    const [productosPorPagina] = useState(10);
    const [busqueda, setBusqueda] = useState('');
    const [categoriaFiltro, setCategoriaFiltro] = useState('');
    const [precioFiltro, setPrecioFiltro] = useState([0, 1000]);
    const [lastVisible, setLastVisible] = useState<any>(null);
    const [hasMore, setHasMore] = useState(true); 


    //useEffect(() => {
        const obtenerProductos = async () => {
            setLoading(true);
            try {
                let productosQuery = query(collection(db, 'Productos'), orderBy('nombre'));
    
                if (busqueda) {
                    productosQuery = query(
                        productosQuery,
                        where('nombre', '>=', busqueda),
                        where('nombre', '<=', busqueda + '\uf8ff')
                    );
                }

                if (categoriaFiltro) {
                    productosQuery = query(productosQuery, where('categoria', '==', categoriaFiltro));
                }

                productosQuery = query(
                    productosQuery,
                    where('precio', '>=', precioFiltro[0]),
                    where('precio', '<=', precioFiltro[1])
                );

               /* if (precioFiltro[0] !== 0 || precioFiltro[1] !== 1000) {
                    productosQuery = query(productosQuery, where('precio', '>=', precioFiltro[0]), where('precio', '<=', precioFiltro[1]));
                  } */

                    /* if (lastVisible) {
                        productosQuery = query(productosQuery, startAfter(lastVisible));
                    } */

                /* if (startAfter) {
                    productosQuery = query(productosQuery, startAfter(startAfter));
                } */

                //const productosCollection = collection(db, 'Productos');
                const productosSnapshot = await getDocs(productosQuery);
                const productosList = productosSnapshot.docs.map((doc) => {
                    const data = doc.data() as Producto;
                    return {
                        id: doc.id,
                        ...data,
                    };
                    });//) as Producto[];

                    //setProductos((prevProductos) => [...prevProductos, ...productosList]);

                    /* const productosFiltrados = productosList.filter((producto) =>
                        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                        producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
                      ); */

                //.log('Productos:', productosList);
                //setProductos((prevProductos) => [...prevProductos, ...productosList]);

                //setProductos(productosFiltrados);

                setProductos(productosList);


                /* if (productosList.length === 0) {
                    setHasMore(false);
                } else {
                    setLastVisible(productosSnapshot.docs[productosSnapshot.docs.length - 1]);
                } */
            } catch (error) {
                console.error('Error al obtener productos:', error);
            } finally {
                setLoading(false);
            }

            //obtenerProductos();
        };//, [busqueda, categoriaFiltro, precioFiltro]);

       /*  const auth = getAuth();
        setUsuarioAutenticado(!!auth.currentUser); */

        useEffect(() => {
            obtenerProductos();
        }, [busqueda, categoriaFiltro, precioFiltro, pagina]);

        const manejarCambioBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
            setBusqueda(e.target.value);
        };
    
        const manejarCambioCategoria = (e: React.ChangeEvent<HTMLSelectElement>) => {
            setCategoriaFiltro(e.target.value);
        };
    
        const manejarCambioPrecio = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newPrice = e.target.value.split(',').map((v) => parseFloat(v));
            setPrecioFiltro(newPrice);
        };

        const cargarMasProductos = () => {
            setPagina(pagina + 1);
        };

        //const productosPaginados = productos.slice((pagina - 1) * productosPorPagina, pagina * productosPorPagina);

    

    if (loading) {
        return <div className='text-center'>Cargando productos...</div>;
    }

    return (
        <div className="productos">
            <h1 className="my-4">productos</h1>
            <div className="d-flex justify-content-between mb-4">
            <div className="col-md-3 filtros">
                <input type="text" placeholder="Buscar productos..." value={busqueda} onChange={/* (e) => setBusqueda(e.target.value) */ manejarCambioBusqueda} />
            </div>
             

             <div className='col-md-3'>
                <select className='form-select' onChange={/* (e) => setCategoriaFiltro(e.target.value) */manejarCambioCategoria} value={categoriaFiltro}>
                    <option value="">Filtrar por categoría</option>
                    <option value="fiesta">Fiesta</option>
                    <option value="bodas">Bodas</option>
                    <option value="conciertos">Conciertos</option>
                    <option value="catering">Catering</option>
                    <option value="laboral">laboral</option>
                </select>
             </div>

            <div className="col-md-3">
                <div className="filtro-precio">
                    <label>Rango de precio:</label>
                    <input type="number" value={precioFiltro[0]} onChange={/* (e) => setPrecioFiltro([parseInt(e.target.value), precioFiltro[1]]) */ manejarCambioPrecio} placeholder="Min" />
                    <input type="number" value={precioFiltro[1]} onChange={(e) => setPrecioFiltro([precioFiltro[0], parseInt(e.target.value)])} placeholder="Max" />
                </div>
            </div>

                {/* <input type="range" min="0" max="1000" value={priceFilter[1]} onChange={manejarCambioPrecio} />
                <span>Rango de precio: {priceFilter[0]}€ - {priceFilter[1]}€</span> */}
            </div>

            {productos.length === 0 ? (
                <p>No hay productos disponibles.</p>
            ) : (
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {productos.map((producto) => (
                        <div key={producto.id} className="col" style={{ width: '18rem' }}>
                            <div className="card">
                            <img src={producto.imagen || 'https://via.placeholder.com/150'} className="card-img-top" alt={producto.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre || 'Sin nombre'}</h5>
                                    <p className="card-text">Precio: ${producto.precio  ? `${producto.precio}€` : 'Precio no disponible'}</p>
                                    <p className="card-text">Descripción: {producto.descripcion || 'Sin descripción'}</p>

                                    <Link to={`/producto/${producto.id}`} className="btn btn-primary">Ver detalles</Link>

                                </div>


                           {/*  <Link to={`/producto/${producto.id}`} className="btn btn-primary">Ver detalles</Link> */}

                            </div>
                        </div>
                    ))}
                    
                </div>

                    
                
            )}

            <div className="d-flex justify-content-center mt-4 paginacion">
                    {/* <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
                    Anterior
                    </button> */}

                {hasMore ? (
                    <button className="btn btn-secondary" onClick={cargarMasProductos}>Cargar más</button>
                    ) : (
                        <p>No hay más productos.</p>
                    )}

                    <span>Página {pagina}</span>

                    <button onClick={() => setPagina(pagina + 1)} disabled={pagina * productosPorPagina >= productos.length}>Siguiente</button>
            </div>

            {/* <div className="card" style={{ width: '18rem' }}>
                <img src="path-to-image.jpg" className="card-img-top" alt="Product" />
                <div className="card-body">
                    <h5 className="card-title">Product Name</h5>
                    <p className="card-text">Description of the product.</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div> */}
        </div>
    );
};

export default ProductoComponent;
