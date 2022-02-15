const ItemDetail = (props) =>{

    return(
        <>
        <section>
            <img src={props.picUrl}></img>
        </section>
        <section>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h3>${props.price}</h3>
        </section>
        </>
    )
}

export default ItemDetail;