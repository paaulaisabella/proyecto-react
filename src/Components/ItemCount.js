import { Link } from "react-router-dom";
import { useState } from "react"

const ItemCount = (props) => {

    const [stock, setStock] = useState(props.minStock);
    const [checkoutBtn, setCheckoutBtn] = useState(true);

    const increment = () => {
        
        if (stock < props.maxStock){
            setStock(stock+1);
        }
    }

    const decrease = () => {
        if (stock > props.minStock){
            setStock(stock-1);
        }
    }

    const onAdd= () => {
        alert(`Agregaste ${stock} de este producto`);
        setCheckoutBtn(false);
    }

    return (
        <>
        <section className="addToCart">
        <div className="stock">
            <button onClick={increment} className="stockBtn">+</button>
            <p className="stockTxt">{stock}</p>
            <button onClick={decrease} className="stockBtn">-</button>
        </div>
        
        <div>
        {    checkoutBtn ?
            <button onClick={onAdd} className="addToCartBtn">Agregar al carrito</button>
            : <Link to= '/cart'><button className="checkoutBtn">Checkout</button></Link>
        }
            </div>
        
        </section>
        </>
    )
}

export default ItemCount;