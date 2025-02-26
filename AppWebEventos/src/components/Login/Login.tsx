import { useState } from 'react';
import './Login.css';

function Login() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    return (
        <div className='container'>
            <div className="IniciarSesion">
                <h2>Iniciar Sesión</h2>

                <form>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name='nombre' id='nombre' value={nombre} /* required */ onChange={(evento) => setNombre(evento.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name='email' value={email} onChange={(evento) => setEmail(evento.target.value)} />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input type="password" /* name='password' */ value={contraseña} onChange={(evento) => setContraseña(evento.target.value)} />
                    </div>
                        <button type="submit">Iniciar Sesión</button>
                        <a href="../Registro/Registro.jsx">Registrate aquí</a>
                        
                        <button className='google'>
                            Iniciar Sesión con Google
                        </button>
                </form>
            
            </div>
        </div>
        );

}

export default Login;