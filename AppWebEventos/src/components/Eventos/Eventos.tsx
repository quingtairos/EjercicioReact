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
            console.log(snapshot.docs.map(doc => doc.data()));
            setEventos(
                snapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        nombre: data.nombre || '',
                        precio: data.precio || 0,
                        descripcion: data.descripcion || '',
                    };
                })
            );
        });
    
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


