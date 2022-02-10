

const Item = (props) => {
    return(
        <>
        <div className="itemCard">
        <img className="itemImg" src={props.picUrl}></img>    
        <h3 className="itemName">{props.name}</h3>
            <p className="itemPrice">${props.price} Pesos</p>
        <button className="detailBtn">Ver detalle del producto</button>
        </div>
        </>
    )
}

export default Item;