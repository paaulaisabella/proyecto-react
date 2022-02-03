import CartWidget from "./CartWidget";


let NavBar = () => {
    return (
        <>
    <nav className= "navbar">
        <h1 className="title">Shine Like a Diamond</h1>
        <CartWidget/>
        <ul className="navlist">
        <li className="navlist-item"><a className="navlist-link">Inicio</a></li>
        <li className="navlist-item"><a className="navlist-link">Catálogo</a></li>
        <li className="navlist-item"><a className="navlist-link">Contácto</a></li>
        </ul>
    </nav>
    </>
    );
}

export default NavBar;