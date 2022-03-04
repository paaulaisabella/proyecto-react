import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebase"

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        /* if(idCategory == undefined){
            customFetch(items, 2000)
        .then((resolve) => setProduct(resolve))
        .then(() => setLoading(false))
        .catch((error) => console.log(error))
        } else{
        customFetch(items.filter(item => item.categoryID === parseInt(idCategory)), 2000)
        .then((resolve) => setProduct(resolve))
        .then(() => setLoading(false))
        .catch((error) => console.log(error))
        } */

        const firestoreFetch = async() => {
            const querySnapshot = await getDocs(collection(db, "items"));
            return querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
        };
        if(idCategory == undefined){
            firestoreFetch()
                .then(result => setProduct(result))
                .then(() => setLoading(false))
                .catch(error => console.log(error));
        } else{
            firestoreFetch(product.filter(item => item.categoryID === parseInt(idCategory)))
                .then(result => setProduct(result))
                .then(() => setLoading(false))
                .catch(error => console.log(error));
        }
        console.log(idCategory)
    }, [idCategory]);

    
    return(
        <>
        <section className="itemSection">
            {loading ? ("Cargando...") : <ItemList productos= {product}/>}
        </section>
        </>
    );
}

export default ItemListContainer;