import { Link } from "react-router-dom";

const Item = (props) => {

    return(
        <>
        <div className="itemCard">
        <img className="itemImg" src={props.picUrl} alt= {props.name}></img>    
        <h3 className="itemName">{props.name}</h3>
            <p className="itemPrice">${props.price}</p>
        <Link to={`/proyecto-react/item/${props.id}`}><button className="detailBtn" id={props.id}>Ver detalle del producto</button></Link>
        </div>
        </>
    )
}

export default Item;