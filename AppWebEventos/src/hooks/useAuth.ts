import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe();
    }, []);

    return { user, isAuthenticated: !!user };

};