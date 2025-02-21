import './Header.css';

import Producto from '../Productos';

import Carrito from '../Carrito';

import Login from '../Login';

import Registro from '../Registro';

const Header = () => {
    
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
                    <li><a href="/">Inicio</a></li>
                    <li><a href="../Productos/Producto.tsx">Productos/EVENTOS</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <li><a href="../Carrito/Carrito.tsx">Carrito</a></li>
                    <li><a href="/sobreNos">Acerca de</a></li>
                    <img src="../../assets/img/user-circle.png" alt="" />
                    <li><a href="../Login/Login.tsx">Iniciar Sesión</a></li>
                    <li><a href="../Registro/Registro.tsx">Registrarse</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;