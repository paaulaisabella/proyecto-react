import { useState } from "react"

const ItemCount = () => {

    const [stock, setStock] = useState(1);

    const increment = () => {
        setStock(stock+1);

        if (stock >= 5){
            setStock(5)
        }
    }

    const decrease = () => {
        setStock(stock-1);
        if (stock <= 1){
            setStock(1)
        }
    }

    const greet = () => {
        alert("Helloooo!!!")
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
            <button onClick={greet} className="addToCartBtn">Agregar al carrito</button>
        </div>
        </section>
        </>
    )
}

export default ItemCount;