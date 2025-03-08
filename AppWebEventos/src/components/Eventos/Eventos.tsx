import { DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { EventosCollection } from '../../firebase/controller';
//import { Evento } from '../../types/Evento';


// { collection } from 'firebase/firestore';
import Information from '../Information/Information';
import './Eventos.css';


// Asegúrate de importar tu colección de Firestore aquí
// import { EventosCollection } from './ruta-a-tu-firestore';
import { Evento } from '../../types/Evento';
//import { FC } from 'react';

function Eventos() {
    const [Eventos, setEventos] = useState<Evento[]>([]);

    useEffect(() => 
        onSnapshot(EventosCollection, (snapshot: QuerySnapshot<DocumentData>) => {
            setEventos(
                snapshot.docs.map((doc: any) => {
                //console.log(doc, "doc");
                return {
                    id: doc.id,
                    ...document.data(),
                };
                })
            );
        }),
        []
    );

    //console.log(Eventos, "Eventos");

        return (
            <div className="card">
                <h2 className='titulo'>Eventos</h2>
                (Eventos && Eventos.length ? (
                    <div>
                        {
                            Eventos?.map((Evento) => (
                                <Information key={Evento.id} Evento=
                                {Evento} />
                            ))}
                    </div>
                ) : (
                    <h2 className='no-Eventos'>No hay Eventos</h2>
                ))
            </div>
        );

      
};

export default Eventos;

