import './Header.css';


const Header = () => {

    return (
        <header className='text-light'>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos/EVENTOS</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <li><a href="/carrito">Carrito</a></li>
                    <li><a href="/sobreNos">Acerca de</a></li>
                    <img src="../../assets/img/user-circle.png" alt="" />
                    <li><a href="/login">Iniciar Sesión</a></li>
                    <li><a href="/registro">Registrarse</a></li>
                </ul>
            </nav>
        </header>
    )
    
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
}

export default Header;