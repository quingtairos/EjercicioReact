import './Login.css';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';


//import "firebase/auth";


const provider = new GoogleAuthProvider();


const Login: React.FC = () => {

    const [nombre, setNombre] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [contraseña, setContraseña] = useState<string>('');
    const [usuario, setUsuario] = useState<User | null>(null);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

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
        
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Contraseña:", contraseña);

        setError('');
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, contraseña);
            console.log("Usuario autenticado", userCredential.user);

            navigate('/productos');
        } catch (error: any) {
            setError(error.message);
        }

    };

    const handleGoogleLogin = async () => {
        try {

            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("usuario con Google: ", user);
            setUsuario(user);

            navigate('/productos');
        } catch (error: any) {
            console.error("Error en la autenticación:", error);
            setError(error.message);
        }
    };



    return (
        <div className='container'>
            <div className="IniciarSesion">
                <h2>Iniciar Sesión</h2>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name='nombre' id='nombre' value={nombre} /* required */ onChange={(evento: ChangeEvent<HTMLInputElement>) => setNombre(evento.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name='email' value={email} onChange={/* handleEmailChange */(evento: ChangeEvent<HTMLInputElement>) => setEmail(evento.target.value)} required />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input type="password" name='contraseña' value={contraseña} onChange={(evento: ChangeEvent<HTMLInputElement>)/* (handlePasswordChange) */ => setContraseña(/* handlePasswordChange */evento.target.value)} required />
                    </div>

                        <button type="submit">Iniciar Sesión</button>

                        <NavLink to="../Registro">¿No tienes cuenta? Registrate aquí</NavLink>
                        
                        {/* <button onClick={SIGN_IN_WITH_GOOGLE} className='google'>
                            Iniciar Sesión con Google
                        </button> */}
                </form>

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