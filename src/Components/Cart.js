import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Cart = () => {

    const cart = useContext(CartContext);

    return (
        <>
    <h1 className='cartTitle'>CARRITO</h1>

        { cart.itemList.length === 0 && (
            <>
            <h2 className='emptyCart'>EL CARRITO ESTÁ VACÍO.</h2>
            <Link to= "/"><button className='addToCartBtn'>Volver a inicio</button></Link>
            </>
        )}

        {cart.itemList.length !== 0 && (
            <>
        <button className= "addToCartBtn deleteAllBtn" onClick={cart.clear}>Borrar Todo</button>
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
            <button className= "addToCartBtn deleteItem" onClick={() => cart.removeItem(item.id)}>Eliminar Producto</button>
            </div>
        </section>
        ))}
        </>
        )}
        </>
    )
}

export default Cart;