import Imagen from "../Media/carrito-de-compras-1.png"

const CartWidget = () => {

    return(
        <>
        <div className="cart">
        <img src = {Imagen} className="cart-img"></img>
        <p className="cart-items-number">3</p>
        </div>
        </>
    )
}

export default CartWidget;