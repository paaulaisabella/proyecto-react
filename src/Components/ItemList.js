import Item from "./Item"

const ItemList = (props) => {
    return (

        props.productos.map(item => 
            
        <Item 
        key= {item.id}
        picUrl={item.picUrl}
        name= {item.name}
        price= {item.price}
        />
        ))
}
    
export default ItemList;