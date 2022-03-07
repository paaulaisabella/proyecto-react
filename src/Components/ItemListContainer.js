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

    let img= "https://images.app.goo.gl/vGKpcWdCLooHHP8c7"
    
    return(
        <>
        <section className="itemSection">
            {loading ? (<img src= {img} alt= "Cargando..."/>) : <ItemList productos= {product}/>}
        </section>
        </>
    );
}

export default ItemListContainer;