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

    let img= "https://firebasestorage.googleapis.com/v0/b/proyecto-react-4fcfb.appspot.com/o/POO8fEn.gif?alt=media&token=6def60b2-14f7-47c7-bb4c-d88bf0ab2927"

    return(
        <>
        <section className="itemSection">
        {loading ? (<img  className= "loadingImg"src= {img} alt= "Cargando..."/>) : <ItemDetail product= {product} />}
        </section>
        </>
    );
}

export default ItemDetailContainer;