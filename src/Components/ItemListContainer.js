import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";

const {items} = require("../utils/productos") 

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
            <ItemList productos= {product}/>
            <ItemCount maxStock ="5" minStock= "1"/>
        </section>
        </>
    );
}

export default ItemListContainer;