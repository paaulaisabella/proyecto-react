import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Cart = () => {

    const cart = useContext(CartContext);
    const total= cart.itemList.reduce((acc, el) => acc + el.total, 0);
    return (
        <>
    <h1 className='cartTitle'>CARRITO</h1>

        {cart.itemList.length === 0 && (
            <section className='emptyCart'>
            <h2 className='emptyCart-text'>EL CARRITO ESTÁ VACÍO.</h2>
            <Link to= "/"><button className='homeBtn'>Volver a inicio</button></Link>
            </section>
        )}

        {cart.itemList.length !== 0 && (
            <section className='checkout'>
                <section>
        {cart.itemList.map(item => (
            <section key={item.id} className='cartItem'>
            <img src={item.img} className= 'cartItem-img'></img>
            <div>
            <h2 className='cartItem-name'>{item.name}</h2> 
            <p className='cartItem-qty'>{item.cant} unidad(es)</p>
            <p className='cartItem-price'>${item.price} Pesos C/U</p>
            <p className='cartItem-total'>Total: ${item.total} Pesos </p>
            </div>
            <div>
            <button className= "addToCartBtn deleteItem" onClick={() => cart.removeItem(item.id)}>x</button>
            </div>
        </section>
        ))}
                </section>
        <div>
            <section className='cartTotal'>
                <h3>Resumen:</h3>
                {cart.itemList.map(item => (
                    <section className='resumenText'>
                        <p>{item.cant} - {item.name}</p>
                        <p>${item.total}</p>
                    </section>
                ))}
                <p>Total: ${total}</p>
            </section>
    
            <button className= "addToCartBtn deleteAllBtn" onClick={cart.clear}>Borrar Todo</button>
        </div>
        </section>
        )}
        </>
    )
}

export default Cart;