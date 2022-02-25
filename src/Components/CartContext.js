import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [itemList, setItemList] = useState([]);

    const addToCart = (item, stock) => {
        setItemList([
            ...itemList, 
            {
                id: item.id,
                name: item.name,
                img: item.picUrl,
                price: item.price,
                cant: stock
            }
        ]);
    }

    const deleteAll = () => {
        setItemList([]);
    }

    return(
        <CartContext.Provider value= {{itemList, addToCart, deleteAll}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;