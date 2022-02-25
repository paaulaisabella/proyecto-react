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
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path= '/cart' element= {<Cart/>}/>
        </Routes>
        </BrowserRouter>
        </CartContextProvider>
    )
}

export default Home;