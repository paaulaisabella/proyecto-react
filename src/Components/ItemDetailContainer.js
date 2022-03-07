import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { firestoreFetchOne } from "../utils/firebaseFetch"


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const {idItem} = useParams();

    useEffect(() => {

        firestoreFetchOne(idItem)
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