import './Registro.css';

function Registro() {

    <h2>Registrate</h2>

      return (
        <form>
          <input
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
          />
          <button type="submit">Registrarse</button>
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
                <input type="text" name='apellidos' value={apellidos} onChange={(evento) => setUsuario(evento.target.value)} />
            </div>
            <div>
                <label>Fecha Nacimiento:</label>
                <input type="date" name='fechaNacimiento' value={fechaNacimiento} onChange={(evento) => setUsuario(evento.target.value)} />
            </div>
            <button type="submit">Registrate</button>
                <a href="../Registro/Registro.jsx">Registrate aquí</a>
            
        </form>
      );

}

export default Registro;