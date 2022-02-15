import { useState, useEffect } from "react";
import { getItem } from "../utils/getItem";
import ItemDetail from "./ItemDetail"
import ItemCount from "./ItemCount";

const {items} = require("../utils/productos") 

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);


    useEffect(() => {
        getItem(items, 2000)
        .then((resolve) => setProduct(resolve))
        .catch((error) => console.log(error))
    }, []);

    
    return(
        <>
        <section className="itemSection">
            <ItemDetail picUrl={items[0].picUrl}
            name={items[0].name}
            description={items[0].description}
            price={items[0].price}
            />
            <ItemCount maxStock ={items[0].stock} minStock= "1"/>
        </section>
        </>
    );
}

export default ItemDetailContainer;