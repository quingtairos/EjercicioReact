import { DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { EventosCollection } from '../../firebase/controller';
import { Evento } from '../../types/Evento';
import Information from '../Information/Information';
import './Eventos.css';

function Eventos() {
    const [eventos, setEventos] = useState<Evento[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(EventosCollection, (snapshot: QuerySnapshot<DocumentData>) => {
            setEventos(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(), // Aquí usamos doc.data() para obtener los datos correctos
                    };
                })
            );
        });

        // Cleanup function para cuando el componente se desmonte
        return () => unsubscribe();
    }, []);

    return (
        <div className="card">
            <h2 className="titulo">Eventos</h2>
            {eventos && eventos.length ? (
                <div>
                    {eventos.map((evento) => (
                        <Information key={evento.id} Eventos={evento} />
                    ))}
                </div>
            ) : (
                <h2 className="no-Eventos">No hay Eventos</h2>
            )}
        </div>
    );
}

export default Eventos;


