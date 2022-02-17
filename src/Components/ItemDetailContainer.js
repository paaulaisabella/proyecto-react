import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/getItem";
import ItemDetail from "./ItemDetail"

const {items} = require("../utils/productos") 

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const {idItem} = useParams();
    console.log(idItem);

    useEffect(() => {
        getItem(items.find(item => item.id === parseInt(idItem)), 2000)
        .then((resolve) => setProduct(resolve))
        .then(() => setLoading(false))
        .catch((error) => console.log(error))
    }, [idItem]);

    
    return(
        <>
        <section className="itemSection">
        {loading ? ("Cargando...") : <ItemDetail product= {product} />}
        </section>
        </>
    );
}

export default ItemDetailContainer;