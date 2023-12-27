import { useState } from "react";
import { Link } from "react-router-dom"

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validar = () => {
        if (email === 'arthur') {
            console.log("Arthur funcionou")
        }
    }

    return (
        <div>
            <p>Login</p>
            <input placeholder="Seu email" type="text" onChange={(e) => { setEmail(e.target.value) }} />
            <input placeholder="Sua senha" type="password" onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={validar}>Entrar</button>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Login;
