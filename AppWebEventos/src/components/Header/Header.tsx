import { Link } from 'react-router-dom';
import './Header.css';





import { FC } from 'react';


const Header: FC = () => {
    
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
                    <li><Link to="../Productos/Producto.tsx">Productos/EVENTOS</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="../Carrito/Carrito.tsx">Carrito</Link></li>
                    <li><Link to="/sobreNos">Acerca de</Link></li>
                    <img src="../../assets/img/user-circle.png" alt="PERFIL" />
                    <li><Link to="../Login/Login.tsx">Iniciar Sesión</Link></li>
                    <li><Link to="../Registro/Registro.tsx">Registrarse</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;