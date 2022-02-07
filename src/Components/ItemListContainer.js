import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return(
        <>
        <div>
            <h2 className="greeting">{props.greeting}</h2>
            <ItemCount maxStock ="5"/>
        </div>
        </>
    );
}

export default ItemListContainer;