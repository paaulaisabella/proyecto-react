import Imagen from "../Media/carrito-de-compras-1.png";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { useContext } from "react";

const CartWidget = () => {

    const cart = useContext(CartContext);
    console.log(cart.itemList);
    return(
        <>
        <Link to= "/cart">
        <div className="cart">
        <img src = {Imagen} className="cart-img"></img>

        {
        cart.itemList.length !== 0 &&
        (<>
            {cart.itemList.forEach((item) => {
                <p className="cart-items-number">{item.cant}</p>
            }
            )}
        </>
        )
    }
        </div>
        </Link>
        </>
    )
}

export default CartWidget;