import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

let NavBar = () => {
    let logo = 'https://firebasestorage.googleapis.com/v0/b/proyecto-react-4fcfb.appspot.com/o/logo-slad.png?alt=media&token=809ef853-ef86-4dc0-b4cc-0c6d2b8d5b97'
    return (
        <>
    <nav className= "navbar">
        <Link to= "/proyecto-react"><img src= {logo} alt= "Shine Like a Diamond" className="logo"/></Link>
        <ul className="navlist">
        <li className="navlist-item"><Link to="/proyecto-react/category/1" className="navlist-link">Anillos</Link></li>
        <li className="navlist-item"><Link to="/proyecto-react/category/2" className="navlist-link">Aros</Link></li>
        <li className="navlist-item"><Link to="/proyecto-react/category/3" className="navlist-link">Collares</Link></li>
        <li className="navlist-item"><Link to="/proyecto-react/category/4" className="navlist-link">Dijes</Link></li>
        </ul>
        <CartWidget/>
    </nav>
    </>
    );
}

export default NavBar;