import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            <p>Home</p>
            <Link to="/login">Login</Link>
            <Link to="/solicitacao">Abrir chamado</Link>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="/tecnicos">Técnicos</Link>

        </div>
    )
}

export default Home