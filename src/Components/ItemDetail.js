import ItemCount from "./ItemCount";

const ItemDetail = ({product}) =>{

    return(
        <article className="itemDetail">
        <section className="detailImg">
            <img src={product.picUrl}></img>
        </section>
        <section className="detailDesc">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <h5>Actualmente en stock: {product.stock}</h5>
            <ItemCount maxStock= {product.stock} minStock={1} />
        </section>
        </article>
    )
}

export default ItemDetail;