import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { firestoreFetch } from "../utils/firebaseFetch"


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
            firestoreFetch(idCategory)
                .then(result => setProduct(result))
                .then(() => setLoading(false))
                .catch(error => console.log(error));
    }, [idCategory]);

    let img= "https://firebasestorage.googleapis.com/v0/b/proyecto-react-4fcfb.appspot.com/o/POO8fEn.gif?alt=media&token=6def60b2-14f7-47c7-bb4c-d88bf0ab2927"
    
    return(
        <>
        <section className="itemSection">
            {loading ? (<img  className= "loadingImg"src= {img} alt= "Cargando..."/>) : <ItemList productos= {product}/>}
        </section>
        </>
    );
}

export default ItemListContainer;