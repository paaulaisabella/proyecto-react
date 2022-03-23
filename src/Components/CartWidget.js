import Imagen from "../Media/carrito-de-compras-1.png";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { useContext } from "react";

const CartWidget = () => {

    const cart = useContext(CartContext);

    const cartNumber= cart.itemList.reduce((acc, el) => acc + el.cant, 0);
    return(
        <>
        <Link to= "/proyecto-react/cart">
        <div className="cart">
        <img src = {Imagen} alt= "Cart" className="cart-img"></img>

        {
        cart.itemList.length !== 0 &&
        (<>
                <p className="cart-items-number">{cartNumber}</p>
        </>
        )
    }
        </div>
        </Link>
        </>
    )
}

export default CartWidget;