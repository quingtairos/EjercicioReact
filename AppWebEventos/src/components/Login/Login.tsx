import './Login.css';

/* import React, ChangeEvent, FormEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


import { GoogleAuthProvider, signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig'; */


//import "firebase/auth";

import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { FormEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';


//const provider = new GoogleAuthProvider();

/* const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('Usuario con Google:', user);
        setUsuario(user); // Si necesitas almacenar el usuario en tu estado

        navigate('/productos'); // O la ruta que prefieras
    } catch (error: any) {
        console.error("Error en la autenticación con Google:", error);
        setError('Error al iniciar sesión con Google. Intenta nuevamente.');
    }
}; */


const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [contraseña, setContraseña] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [usuario, setUsuario] = useState<any>(null);
    const navigate = useNavigate();

/*     const [nombre, setNombre] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [contraseña, setContraseña] = useState<string>('');
    const [usuario, setUsuario] = useState<User | null>(null);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate(); */

    /* const[formState, setFormState] = useState({
 
        nombre: '',
        contraseña: '',
        contraseñausuario: '',
       }); */


    /* const handleLogin = async (e: FormEvent) => {
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
    }; */

    const handleSubmit = async (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        
        /* console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Contraseña:", contraseña); */

        setError('');

        if (!email || !contraseña) {
            setError("Debes ingresar un correo y una contraseña válidos.");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, contraseña);
            console.log('Usuario autenticado', userCredential.user);

            navigate('/productos');

        } catch (error: any) {
            console.error('Error en el login:', error.message);
            setError('Error al iniciar sesión. Verifica tu correo y contraseña.');
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Usuario con Google:', user);
            setUsuario(user);

            navigate('/productos');
        } catch (error: any) {
            console.error("Error en la autenticación con Google:", error);
            setError('Error al iniciar sesión con Google. Intentalo de nuevo.');
        }
    };



    return (
        <div className='container'>
            <div className="IniciarSesion">
                <h2>Iniciar Sesión</h2>

                <form onSubmit={handleSubmit}>
                    {/* <div>
                        <label>Nombre:</label>
                        <input type="text" name='nombre' id='nombre' value={nombre} /* required */ /*onChange={(evento: ChangeEvent<HTMLInputElement>) => setNombre(evento.target.value)} />
                    </div> */}
                    <div>
                        <label>Email:</label>
                        <input type="email" /* name='email' */ value={email} onChange={/* handleEmailChange */(e) => setEmail(e.target.value)} /* required */ />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input type="password" /* name='contraseña' */ value={contraseña} onChange={(e)/* (handlePasswordChange) */ => setContraseña(/* handlePasswordChange */e.target.value)} /* required */ />
                    </div>

                        {error && <div style={{ color: 'red' }}>{error}</div>}

                        <button type="submit">Iniciar Sesión</button>
                        
                        {/* <button onClick={SIGN_IN_WITH_GOOGLE} className='google'>
                            Iniciar Sesión con Google
                        </button> */}
                </form>

                <div className='btn btn-info'>
                    <NavLink to="../Registro">¿No tienes cuenta? Registrate aquí</NavLink>
                </div>

                <div>
                    <button onClick={/* SIGN_IN_WITH_GOOGLE */handleGoogleLogin} className='google'>
                        Iniciar Sesión con Google
                    </button>
                </div>
            
            </div>
        </div>
        );

};

export default Login;
