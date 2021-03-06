
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Component/AddItems/AddItems';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import ProductsDetails from './Component/Home/ProductsDetails';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register/Register';
import RequireAuth from './Component/Login/RequireAuth.js/RequireAuth';
import ManageInventory from './Component/ManageInventory/ManageInventory';
import Footer from './Component/Shared/Footer/Footer';
import Navigation from './Component/Shared/Navbar/Navigation';
import NotFound from './Component/Shared/NotFound/NotFound';
import MyItems from './MyItems/MyItems';

function App() {
  const [cart, setCart]=useState([]);

    const handleAddtoCart = service=>{
        const newCart = [...cart,service];
        setCart(newCart);
    }
  return (
    <div >
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        

        <Route path='/manageInventory' element={<RequireAuth>
          <ManageInventory handleAddtoCart={handleAddtoCart}></ManageInventory>
        </RequireAuth>}></Route>

        <Route path='/addItems' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>
        <Route path='/myItems' element={<RequireAuth>
          <MyItems cart={cart} setCart={setCart}></MyItems>
        </RequireAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path= '/service/:productId' element={<RequireAuth>
          <ProductsDetails></ProductsDetails>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
