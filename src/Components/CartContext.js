import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [itemList, setItemList] = useState([]);

    const addToCart = (item, stock) => {

        if (isInCart(item.id)){
            itemList.forEach((element) => {
                if(element.id === item.id){
                    element.cant += stock;
                }})
        } else {
            setItemList([
                ...itemList, 
                {
                    key: item.id,
                    id: item.id,
                    name: item.name,
                    img: item.picUrl,
                    price: item.price,
                    cant: stock,
                    total: item.price*stock
                }
            ]);
        }
    }

    const clear = () => {
        setItemList([]);
    }

    const removeItem = (itemID) => {
        setItemList(itemList.filter(item => item.id !== itemID));
    }

    const isInCart = (id) => {
        return itemList.find((item) => item.id === id) ? true : false; 
    }

    return(
        <CartContext.Provider value= {{itemList, addToCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;