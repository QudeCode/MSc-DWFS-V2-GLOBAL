import { createContext } from 'react';
import type CredentialType from '../interfaces/Credentials';

interface AuthContextType {
    user: CredentialType;
    setUser: React.Dispatch<any>;
}

// Creamos el contexto con un valor inicial (o undefined)
export const AuthContext = createContext<AuthContextType | undefined>(undefined);