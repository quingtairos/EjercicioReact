import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Registro.css';

import React, { FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';

const Registro: FC = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [usuario, setUsuario] = useState(''); 
    const [apellidos, setApellidos] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    //const [registrado, setRegistrado] = useState(false);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handlleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      //console.log('Formulario enviado');

      setLoading(true);
      setError('');

      try {
        const userCredentiales = await createUserWithEmailAndPassword(auth, email, contraseña);

        console.log('Usuario creado:', userCredentiales.user);



        navigate('/productos');

      } catch (error: any) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

  /* function setEmail(value: string): void {
    throw new Error('Function not implemented.');
  }

  function setContraseña(value: string): void {
    throw new Error('Function not implemented.');
  } */

      return (
        <form onSubmit={handlleSubmit}>
          <h2>Registrate</h2>
          {/* <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Contraseña"
            required
          /> */}
         {/*  <button type="submit">Registrarse</button> */}

          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}
          
            <div>
                <label>Nombre:</label>
                <input type="text" name='nombre' id='nombre' value={nombre} /* required */ onChange={(evento) => setNombre(evento.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" /* name='password' */ value={contraseña} onChange={(evento) => setContraseña(evento.target.value)} />
            </div>
            <div>
                <label>Usuario:</label>
                <input type="text" name='usuario' value={usuario} onChange={(evento) => setUsuario(evento.target.value)} />
            </div>
            <div>
                <label>Apellidos:</label>
                <input type="text" name='apellidos' value={apellidos} onChange={(evento) => setApellidos(evento.target.value)} />
            </div>
            <div>
                <label>Fecha Nacimiento:</label>
                <input type="date" name='fechaNacimiento' value={fechaNacimiento} onChange={(evento) => setFechaNacimiento(evento.target.value)} />
            </div>
            <button type="submit">Registrarse</button>
                {/* <a href="../Registro/Registro.jsx">Registrate aquí</a> */}
            
        </form>
      );

}

export default Registro;