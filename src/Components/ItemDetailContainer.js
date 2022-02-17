import { useState, useEffect } from "react";
import { getItem } from "../utils/getItem";
import ItemDetail from "./ItemDetail"

const {items} = require("../utils/productos") 

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});


    useEffect(() => {
        getItem(items[8], 2000)
        .then((resolve) => setProduct(resolve))
        .catch((error) => console.log(error))
    }, []);

    
    return(
        <>
        <section className="itemSection">
            <ItemDetail product= {product}
            />
        </section>
        </>
    );
}

export default ItemDetailContainer;