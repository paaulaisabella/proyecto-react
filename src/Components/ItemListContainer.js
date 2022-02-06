import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return(
        <>
        <div>
            <h2 className="greeting">{props.greeting}</h2>
            <ItemCount/>
        </div>
        </>
    );
}

export default ItemListContainer;