import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import { Producto } from '../../types/Producto';
import './Producto.css';

const ProductoComponent: React.FC = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const productosCollection = collection(db, 'Productos');
                const productosSnapshot = await getDocs(productosCollection);
                const productosList = productosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Producto[];
                console.log('Productos:', productosList);
                setProductos(productosList);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            } finally {
                setLoading(false);
            }
        };

        obtenerProductos();
    }, []);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div className="productos">
            {productos.length === 0 ? (
                <p>No hay productos disponibles.</p>
            ) : (
                productos.map((producto) => (
                    <div className="card" style={{ width: '18rem' }}>
                        <div key={producto.id} className="producto">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre || 'Sin nombre'}</h5>
                                <p className="card-text">Precio: ${producto.precio  ? `${producto.precio}€` : 'Precio no disponible'}</p>
                                <p className="card-text">Descripción: {producto.descripcion || 'Sin descripción'}</p>
                            </div>
                            <Link to={`/producto/${producto.id}`}>Ver detalles</Link>
                            
                        </div>
                    </div>
                ))
            )}
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
