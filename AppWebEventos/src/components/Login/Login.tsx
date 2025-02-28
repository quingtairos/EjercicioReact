import { ChangeEvent, FormEvent, useState } from 'react';
import './Login.css';

import { Link } from 'react-router-dom';
import { auth } from "../../firebase/firebaseConfig";


import "firebase/auth";


const Login: React.FC = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    


    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(auth, email, contraseña);
            alert('Inicio de sesión exitoso');
        } catch (error) {
            alert(error.message);
        }
    };


    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContraseña(e.target.value);
    };

    return (
        <div className='container'>
            <div className="IniciarSesion">
                <h2>Iniciar Sesión</h2>

                <form onSubmit={handleLogin}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name='nombre' id='nombre' value={nombre} /* required */ onChange={(evento) => setNombre(evento.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name='email' value={email} onChange={handleEmailChange} />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input type="password" /* name='password' */ value={contraseña} onChange={(handlePasswordChange) => setContraseña(handlePasswordChange.target.value)} />
                    </div>
                        <button type="submit">Iniciar Sesión</button>
                        <Link to="../Registro">Registrate aquí</Link>
                        
                        <button className='google'>
                            Iniciar Sesión con Google
                        </button>
                </form>
            
            </div>
        </div>
        );

}

export default Login;