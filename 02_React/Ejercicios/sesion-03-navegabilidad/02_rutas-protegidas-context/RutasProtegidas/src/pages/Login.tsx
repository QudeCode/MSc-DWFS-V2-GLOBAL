import { useContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function Login() {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const { login, isLoading, error, setError } = useAuth()
    const [ formData, setFormData ] = useState<{username: string, password: string}>({username:null, password:null});

    // Si ya está logueado, redirigir
    if (user) {
        const from = location.state?.from || "/";
        return <Navigate to={from} replace />;
    }

    function handleChange(e) {
        // name -> clave // value -> valor
        const { name, value } = e.target;

        // console.log("newValue: ", e.target)
        setFormData(prev => ({
            ...prev,
            [name]: value
        })
        )
    }

    function handleSubmit(e) {
        e.preventDefault(); // evitamos comporamiento default del submit

        const checkData: boolean = (formData.username && formData.username.length > 1 && formData.username.length < 10) && 
            (formData.password && formData.password.length > 1 && formData.password.length < 10);
        // console.debug("checkdata: ", (formData.username && formData.username.length > 1 && formData.username.length < 10) && 
        // (formData.password && formData.password.length > 1 && formData.password.length < 10), ", formData: user: ", formData.username, ", password: ", formData.password)
        
        if(checkData) {
            login(formData.username, formData.password)
        } else {
            // si los valores están mal, imprimimos el dato
            console.info("Error: Revise que los valores introducidos sean válidos.", checkData)
            setError("Revise que los valores introducidos sean válidos.")
        }
    }
    
    return (
        <div className={'login-wrapper'} >
            <h2>Login</h2>
            <section className="login-content">
                <form className="login-form" >
                    {/* Si hay mensaje de error, lo muestra */}
                    {error && (
                        <p className="error-banner">{error}</p>
                    )}

                    <div className="input-field">
                        <label htmlFor="username">Usuario</label>
                        <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username || ""}
                        onChange={handleChange}
                        // className={fieldErrors.username ? "error" : ""}
                        placeholder="Nombre de usuario"
                        disabled={isLoading}
                        />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password || ""}
                        onChange={handleChange}
                        // className={fieldErrors.password ? "error" : ""}
                        placeholder="Nombre de usuario"
                        disabled={isLoading}
                        />
                    </div>

                    <button 
                        onClick={handleSubmit}
                        className="login-button"
                        disabled={isLoading}
                    >
                        Enviar
                    </button>
                </form>
            </section>
        </div>
    );
};