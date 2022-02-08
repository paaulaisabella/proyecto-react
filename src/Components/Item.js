

const Item = (props) => {
    return(
        <>
        <div className="itemCard">
        <img className="itemImg" src={props.picUrl}></img>    
        <h3 className="itemName">{props.name}</h3>
            <p className="itemPrice">${props.price} Pesos</p>

        </div>
        </>
    )
}

export default Item;