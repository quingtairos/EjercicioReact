import { Link } from 'react-router-dom';
import { Evento } from '../../types/Evento';
import './Information.css';


interface InformationProps {
    Eventos: Evento;
}


const Information: React.FC<InformationProps> = ({ Eventos }) => {
        console.log(Eventos, "Eventos");
    return (
       <div className="Evento-preview">
              <h2>{Eventos.nombre}</h2>
              <h3>{Eventos.precio}</h3>
              <p>{Eventos.descripcion}</p>
              {/*< p>Fecha: {Eventos.fecha}</p>
            <p>Lugar: {Eventos.lugar}</p> */}

              {/* Descripcion */}
                <div className="descripcion">
                    <span className='review'>
                        <strong>Destacado</strong>
                    </span>
                    <hr />
                    <span className='featute'>Main Feature: (Eventos?.descripcion)</span>
                    <Link to={`/Eventos/${Eventos.id}`}>
                        <button className='moreinfo-btn'>
                        Ver más Information</button>
                    </Link>
                </div>

       </div>
    );
}

export default Information;