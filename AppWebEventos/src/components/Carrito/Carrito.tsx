import './Carrito.css';

import React, { useEffect, useState } from 'react';

import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { Producto } from '../../types/Producto';

import { useNavigate } from 'react-router-dom';


const Carrito: React.FC = () => {
    
        const [productosEnCarrito, setProductosEnCarrito] = useState<Producto[]>([
            /* { id: 1, nombre: 'Producto 1', precio: 20.99 },
            { id: 2, nombre: 'Producto 2', precio: 15.49 },
            { id: 3, nombre: 'Producto 3', precio: 10.99 },
            { id: 4, nombre: 'Producto 4', precio: 5.49 },
            { id: 5, nombre: 'Producto 5', precio: 25.99 } */
        ]);

        const [mostrarModal, setMostrarModal] = useState(false);

        const [eliminarProducto, setEliminarProducto] = useState<Producto | null>(null);

       /*  const [cargando, setCargando] = useState<boolean>(true); */

       const [cargando, setCargando] = useState(true);


        const navigate = useNavigate();


        const auth = getAuth();
        const usuario = auth.currentUser;
    

        
       useEffect(() => {
          //const unsubscribe = auth.onAuthStateChanged(user => {
            if (!usuario) {
              navigate('/iniciar-sesion');
            } /*else {
              fetchCarrito(user.uid);
            }*/
          }, [usuario, navigate]);


          /*return () => unsubscribe();
        });*/


        useEffect(() => {
          //console.log(usuario)
          if (usuario) {
            const obtenerCarrito = async () => {
              try {
                const carritoRef = doc(db, 'carrito', usuario.uid);
                const docSnap = await getDoc(carritoRef);
                if (docSnap.exists()) {
                  setProductosEnCarrito(docSnap.data().productos || []);
                } else {
                  console.log('No se encontraron productos en el carrito');
                }
              } catch (error) {
                console.error('Error al obtener los productos del carrito: ', error);
              } finally {
                setCargando(false);
              }
            };
      
            obtenerCarrito();
          }
        }, [usuario]);


        /* const fetchCarrito = (userId: string) => {
          db.collection('carrito').doc(userId).get().then((doc) => {
            if (doc.exists) {
              setProductosEnCarrito([]);
            }
            setCargando(false);
          });
        }; */

        const eliminarProductoCarrito = (producto: Producto) => {
          setEliminarProducto(producto);
          setMostrarModal(true);
        };

          /* const confirmarBorrado = () => {
            if (eliminarProducto) {
              const actualizarCarrito = Carrito.filter((p) p.id !== productoEliminado.id);
              db.collection('carrito').doc(auth.currentUser?.uid).actualizar({
                productos: actualizarCarrito,
              })
              .then(() => {
                setCarrito(actualizarCarrito);
                setShowModal(false);
              });
            }
          }; */

          const confirmarBorrado = async () => {
            if (eliminarProducto && usuario) {
              try {
                const carritoRef = doc(db, 'carrito', usuario.uid);
                const actualizarCarrito = productosEnCarrito.filter((producto) => producto.id !== eliminarProducto.id);
                await updateDoc(carritoRef, {
                  productos: actualizarCarrito
                });
                setProductosEnCarrito(actualizarCarrito);
                setMostrarModal(false);
                setEliminarProducto(null);
              } catch (error) {
                console.error('Error al eliminar el producto del carrito: ', error);
              }
              //const actualizarCarrito = productosEnCarrito.filter((producto) => producto.id !== eliminarProducto.id);
              /*db.collection('carrito').doc(auth.currentUser?.uid).actualizar({
                productos: actualizarCarrito,
              })

              .then(() => {*/
                //setProductosEnCarrito(actualizarCarrito);
                /* setMostrarModal(false);
                setEliminarProducto(null); */
              /* }); */
            }
          };

          //manejamos el cambio de cantidad
          const handleCambiarCantidad = async (id: string, newCantidad: number) => {
            if (usuario) {
              try{
                const carritoRef = doc(db, 'carrito', usuario.uid || '');
                const actualizarCarrito = productosEnCarrito.map((producto) => producto.id === id ? {...producto, cantidad: newCantidad } : producto);

                await updateDoc(carritoRef, {
                  productos: actualizarCarrito,
                });

                setProductosEnCarrito(actualizarCarrito);
              } catch (error) {
                console.error('Error al actualizar la cantidad del producto', error);
              }
            }

           

            /* db.collection('carrito').doc(auth.currentUser?.uid).actualizar({
              productos: actualizarCarrito,
            }).then(() => { */
              //setProductosEnCarrito(actualizarCarrito);
          };


          const obtenerPrecioTotal = () => {
            return productosEnCarrito.reduce((total, producto) => total + producto.precio * (producto.cantidad || 1), 0).toFixed(2);
          };

          if (cargando) {
            return  <div>Cargando...</div>;
          }

        return (
            <div className="carrito container mt-4">
                <h2>Carrito</h2>
                {/* <ul>
                    <li>Producto 1</li>
                    <li>Producto 2</li>
                    <li>Producto 3</li>
                    <li>Producto 4</li>
                    <li>Producto 5</li>
                </ul>
                <p>Total: $80</p> */}

                {productosEnCarrito.length === 0 ? (
                  <p>El carrito está vacío.</p>
                    ) : (
                      <>
                          <div className="lista-productos row">
                            {productosEnCarrito.map((producto) => (
                              <div key={producto.id} className="producto-en-carrito  col-md-4 mb-4">
                                <div className="card">
                                  <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                {/* <h3>{producto.nombre}</h3> */}
                                <p className='card-text'>Precio: ${producto.precio}</p>
                                
                                <div className='form-group'>
                                  <label>Cantidad: </label>
                                  <input type="number" className='form-control' value={producto.cantidad || 1} min="1" onChange={(e) => handleCambiarCantidad(producto.id, parseInt(e.target.value))} />
                                </div>

                                  <button className='btn btn-danger' onClick={() => eliminarProductoCarrito(producto/* .id */)}>Eliminar</button>
                                </div>
                              </div>
                            </div>
                            ))}
                          </div>
                        
          {/*               <p>precio Total: ${calcularPrecioTotal()}</p> */}
                            <h4>Precio Total: ${obtenerPrecioTotal()}</h4>
                      </>
                    )}

                    {mostrarModal && eliminarProducto && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <h3>Confirmar eliminación</h3>
                                            <p>¿Estás seguro de que deseas eliminar este producto del carrito?</p>
                                            <button onClick={() => setMostrarModal(false)}>Cancelar</button>
                                            <button onClick={confirmarBorrado}>Eliminar</button>
                                        </div>
                                    </div>
                                )}
          

            {/* <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Confirmar eliminación</Modal.Title>
              </Modal.Header>

              <Modal.Body>¿Estás seguro de que deseas eliminar este producto del carrito?</Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => setsetMostrarModal(false)}>
                  Cancelar
                </Button>
                <Button variant="danger" onClick={confirmarBorrado}>
                  Eliminar
                </Button>
              </Modal.Footer>
            </Modal> */}
    </div>
    
  );

};

export default Carrito;
