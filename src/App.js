
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
import Navigation from './Component/Shared/Navbar/Navigation';

function App() {
  return (
    <div >
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/productDetail' element={<RequireAuth>
          <ProductsDetails></ProductsDetails>
        </RequireAuth>}></Route>

        <Route path='/manageInventory' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>

        <Route path='/addItems' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path= '/service/:productId' element={<RequireAuth>
          <ProductsDetails></ProductsDetails>
        </RequireAuth>}></Route>

      </Routes>

    </div>
  );
}

export default App;
