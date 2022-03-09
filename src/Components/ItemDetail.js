import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({product}) =>{

    const [checkoutBtn, setCheckoutBtn] = useState(true);
    const test = useContext(CartContext);

    const onAdd = (stock) => {
        alert(`Agregaste ${stock} este producto`);
        setCheckoutBtn(false);
        test.addToCart(product, stock);
    };

    return(
        <article className="itemDetail">
        <section className="detailImg">
            <img src={product.picUrl} alt= {product.name} className= "prodImg"/>
        </section>
        <section className="detailDesc">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <h5>Actualmente en stock: {product.stock}</h5>

            {checkoutBtn ?
            <ItemCount maxStock= {product.stock} 
            minStock={1} 
            onAdd={onAdd}/>
            : <Link to='/cart'><button className="checkoutBtn">Checkout</button></Link>
            }
        </section>
        </article>
    )
}

export default ItemDetail;