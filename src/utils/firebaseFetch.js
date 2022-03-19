import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import db from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export const firestoreFetch = async() => {

    const productsRef = collection(db, "items");

    let q= query(productsRef, orderBy('name'));

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }))
};

export const firestoreFetchCategory = async(idCategory) => {

    const productsRef = collection(db, "items");

    let q = query(productsRef, where('categoryID', '==', parseInt(idCategory)));

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }))
}

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
