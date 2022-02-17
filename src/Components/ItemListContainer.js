import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const {items} = require("../utils/productos") 

const ItemListContainer = () => {

    const [product, setProduct] = useState([]);
    const {idCategory} = useParams();

    console.log(parseInt(idCategory));

    useEffect(() => {
        if(idCategory == undefined){
            customFetch(items, 2000)
        .then((resolve) => setProduct(resolve))
        .catch((error) => console.log(error))
        } else{
        customFetch(items.filter(item => item.categoryID === parseInt(idCategory)), 2000)
        .then((resolve) => setProduct(resolve))
        .catch((error) => console.log(error))
        }
    }, [idCategory]);

    
    return(
        <>
        <section className="itemSection">
            <ItemList productos= {product}/>
        </section>
        </>
    );
}

export default ItemListContainer;