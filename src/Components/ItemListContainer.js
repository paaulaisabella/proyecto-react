import Item from "./Item"
import ItemCount from "./ItemCount"
import Imagen1 from "../Media/fotos_react/anillo_flor.jpg"


const items = [
    {
        id: 1,
        name: "Anillo Flor",
        price: 5000,
        picUrl: Imagen1
    }
]

const ItemListContainer = () => {
    return(
        <>
        <div>
            <Item 
            key= {items[0].id}
            picUrl={items[0].picUrl}
            name= {items[0].name}
            price= {items[0].price}/>
            <ItemCount maxStock ="5" minStock= "1"/>
        </div>
        </>
    );
}

export default ItemListContainer;