import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = (deleteAll) => {

    const cart = useContext(CartContext);

    return (
        <>
        <h2>CARRITO</h2>
        <button className= "addToCartBtn" onClick={}>Borrar Todo</button>
        {cart.itemList.map(item => (
        <section>
            <img src={item.img}></img>
            <h3>{item.name}</h3> <p>{item.cant} unidad(es)</p>
            <p>${item.price} Pesos C/U</p>
            <p>Total: ${item.price*item.cant} Pesos </p>
        </section>
        )
        )
        }
        </>
    )
}

export default Cart;