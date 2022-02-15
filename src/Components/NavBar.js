import CartWidget from "./CartWidget";
import logo from "../Media/logo.png"

let NavBar = () => {
    return (
        <>
    <nav className= "navbar">
        <img src = {logo}/>
        <ul className="navlist">
        <li className="navlist-item"><a className="navlist-link">Inicio</a></li>
        <li className="navlist-item"><a className="navlist-link">Catálogo</a></li>
        <li className="navlist-item"><a className="navlist-link">Contácto</a></li>
        </ul>
        <CartWidget/>
    </nav>
    </>
    );
}

export default NavBar;