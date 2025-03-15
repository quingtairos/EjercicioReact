import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

import userIcon from '../../assets/img/user-circle.png';

import { useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';



const Header: React.FC = () => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [hasAccount, setHasAccount] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
        
                setHasAccount(true);
            } else {
                setIsAuthenticated(false);
                setHasAccount(false);
            }
          });
      
            return () => unsubscribe();
        }, []);

        const handleUserIconClick = () => {
            if (isAuthenticated) {
                navigate('/productos');
            } else {
                if (hasAccount) {
                navigate('/iniciar-sesion');
            } else {
                navigate('/registro');
            }
            }
        };
        
    /* return (
        <div className="Header">
            <div className='busqueda'>
                <input 
                    type='text' 
                    placeholder='Buscar producto' 
                />
                <select>
                    <option value=''>Todas las categorías</option>
                    <option value='categoria1'>Categoría 1</option>
                    <option value='categoria2'>Categoría 2</option>
                </select>
                <input 
                    type='number' 
                    placeholder='Precio máximo' 
                    value=""
                />
                <button>Buscar</button>
            </div>
        </div> 
        
    );*/

    return (
        <header className='text-light'>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="../Productos">Productos/EVENTOS</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="../Carrito">Carrito</Link></li>
                    <li><Link to="/sobreNos">Acerca de</Link></li>
                    <li>
                        <button onClick={handleUserIconClick}>
                            <img src={userIcon} alt="PERFIL"  width="30" height="30" />
                        </button>
                    </li>
                    {!isAuthenticated && (
                        <>
                            <li><Link to="../iniciar-sesion">Iniciar Sesión</Link></li>
                            <li><Link to="../Registro">Registrarse</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;