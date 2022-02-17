import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ItemListContainer from '../Components/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer';
import NavBar from '../Components/NavBar';

const Home = () => {
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Home;