import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from '../Components/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer';
import Cart from '../Components/Cart';
import NavBar from '../Components/NavBar';
import CartContextProvider from '../Components/CartContext';

const Home = () => {
    return(
        <CartContextProvider >
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/proyecto-react' element={<ItemListContainer/>}/>
            <Route path='/proyecto-react/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/proyecto-react/item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path='/proyecto-react/cart' element= {<Cart/>}/>
        </Routes>
        </BrowserRouter>
        </CartContextProvider>
    )
}

export default Home;