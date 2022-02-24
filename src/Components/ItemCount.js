import { useState } from "react";

const ItemCount = (props) => {

    const [stock, setStock] = useState(props.minStock);

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

    return (
        <>
        <section className="addToCart">
        <div className="stock">
            <button onClick={increment} className="stockBtn">+</button>
            <p className="stockTxt">{stock}</p>
            <button onClick={decrease} className="stockBtn">-</button>
        </div>
        
        <div>
            <button onClick={() => props.onAdd(stock)} className="addToCartBtn">Agregar al carrito</button>
        </div>
        </section>
        </>
    )
}

export default ItemCount;