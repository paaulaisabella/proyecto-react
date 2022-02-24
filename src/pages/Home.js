import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ItemListContainer from '../Components/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer';
import Cart from '../Components/Cart';
import NavBar from '../Components/NavBar';

const Home = () => {
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path= '/cart' element= {<Cart/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Home;