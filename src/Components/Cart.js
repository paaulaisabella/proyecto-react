import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {

    const cart = useContext(CartContext);

    return (
        <>
        <h1 className='cartTitle'>CARRITO</h1>
        <button className= "addToCartBtn deleteAllBtn" onClick={cart.deleteAll}>Borrar Todo</button>
        {cart.itemList.map(item => (
        <section className='cartItem'>
            <img src={item.img} className= 'cartItem-img'></img>
            <div>
            <h2 className='cartItem-name'>{item.name}</h2> 
            <p className='cartItem-qty'>{item.cant} unidad(es)</p>
            <p className='cartItem-price'>${item.price} Pesos C/U</p>
            <p className='cartItem-total'>Total: ${item.price*item.cant} Pesos </p>
            </div>
            <div>
            <button className= "addToCartBtn deleteItem" onClick={cart.deleteItem}>Eliminar Producto</button>
            </div>
        </section>
        )
        )
        }
        </>
    )
}

export default Cart;