import Imagen from "../Media/carrito-de-compras-1.png";
import { Link } from "react-router-dom";

const CartWidget = () => {

    return(
        <>
        <Link to= "/cart">
        <div className="cart">
        <img src = {Imagen} className="cart-img"></img>
        <p className="cart-items-number">3</p>
        </div>
        </Link>
        </>
    )
}

export default CartWidget;