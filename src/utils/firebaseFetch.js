import { collection, getDocs, query, where } from "firebase/firestore";
import db from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export const firestoreFetch = async(idCategory) => {

    let q; 
    if (idCategory !== undefined){
        q= query(collection(db, "items"), where("categoryID", "==", idCategory));
    } else {
        q= query(collection(db, "items"));
    }

    const querySnapshot = await getDocs();
    return querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }))
};

export const firestoreFetchOne = async(idItem) => {
    const docRef = doc(db, "items", idItem);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
}
