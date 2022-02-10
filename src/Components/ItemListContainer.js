import { useEffect, useState } from "react";
import { customFetch } from "./customFetch";
import Item from "./Item"
import ItemCount from "./ItemCount"

const {items} = require("./ItemList") 

const ItemListContainer = () => {

    const [product, setProduct] = useState([]);


    useEffect(() => {
        customFetch(items, 2000)
        .then((resolve) => setProduct(resolve))
        .catch((error) => console.log(error))
    }, []);

    
    return(
        <>
        <section className="itemSection">
        {product.map(item => 
            
                <Item 
                key= {item.id}
                picUrl={item.picUrl}
                name= {item.name}
                price= {item.price}
                />
                )}
                <ItemCount maxStock ="5" minStock= "1"/>
        </section>
        </>
    );
}

export default ItemListContainer;