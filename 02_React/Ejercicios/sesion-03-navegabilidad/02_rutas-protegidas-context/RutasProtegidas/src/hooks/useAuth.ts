import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { credentials as  credentialsRaw } from "../data/credentials"
import type CredentialType from "../interfaces/Credentials";

const credentials: CredentialType[] = credentialsRaw;

/**
 * Hook para controlar el sistema de login de usuario
 */
export const useAuth = () => {
    // nos traemos el usuario y el setUser para poder controlarlo en el contexto. No traemos "user" porque podemos hacer el logout igualmente
    const { user, setUser } = useContext(AuthContext);
    
    // establecemos error y isLoading para poder establecer estados, mientras que el login o el logout se llevan a cabo.
    const [ error, setError ] = useState<string>("");
    const [ isLoading, setLoading ] = useState<boolean>(false);

    // funcion login para comprobar si las credenciales recibidas son correctas
    function login(username: string, password: string) {
        // como se inicia el proceso de login, borramos cualaquier posible anteriror error y ponemos isLoading en true
        setError("");
        setLoading(true);

        console.debug("login function, username: ", username, ", password: ", password)

        let validUser:boolean = false;
        const user = credentials.find((credential) => credential.username === username)
        
        if(user) {
            validUser = (user.password === password)
        }

        if(validUser) {
            // si el usuario es valido, establecemos usuario y finalizamos el isLoading
            console.log("Login succesfull")
            setUser(user)
            setLoading(false)
        } else {
            // si el usuario es invalido, establecemos error y finalizamos el isLoading
            console.info("Error: La combinación de usuario-contraseña no es válida.")
            setError("La combinación de usuario-contraseña no es válida.")
            setLoading(false);
        }
    }

    // funcion para logout, no haría falta comprobar si hay usuario en realidad
    function logout() {
        // if(user) {

        // ponemos un setTimeOut para simular el comportamiento de un fetch
        setLoading(true)

        // setTimeout(() => {
        setUser(null);
        setLoading(false)
        console.log("logout")
        // }, 1500)

        // }
    }

    return { login, logout, isLoading, error, setError }
};
