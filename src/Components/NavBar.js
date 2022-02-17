import CartWidget from "./CartWidget";
import logo from "../Media/logo.png"
import { Link } from "react-router-dom";

let NavBar = () => {
    return (
        <>
    <nav className= "navbar">
        <Link to= "/"><img src= {logo} className="logo"/></Link>
        <ul className="navlist">
        <li className="navlist-item"><Link to="/category/1" className="navlist-link">Anillos</Link></li>
        <li className="navlist-item"><Link to="/category/2" className="navlist-link">Aros</Link></li>
        <li className="navlist-item"><Link to="/category/3" className="navlist-link">Collares</Link></li>
        <li className="navlist-item"><Link to="/category/4" className="navlist-link">Dijes</Link></li>
        </ul>
        <CartWidget/>
    </nav>
    </>
    );
}

export default NavBar;