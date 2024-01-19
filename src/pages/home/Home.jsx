import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <p>Home</p>
            <Link to="/login">Login</Link> <br />
            <Link to="/abrircorretiva">Abrir Corretiva</Link><br />
            <Link to="/abrirpreventiva">Abrir Preventiva</Link><br />
            <Link to="/corretivas">Corretivas</Link><br />
            <Link to="/usuarios">Usuarios</Link><br />
            <Link to="/tecnicos">Técnicos</Link><br />
            <Link to="/locais">Localizações </Link><br />
        </div>
    )
}

export default Home