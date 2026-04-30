import { useState } from "react";
import { AuthContext } from "./AuthContext";
import type CredentialType from "../interfaces/Credentials";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<CredentialType | null>(null);
  
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  }