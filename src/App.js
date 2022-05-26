
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Component/AddItems/AddItems';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import ProductsDetails from './Component/Home/ProductsDetails';
import Login from './Component/Login/Login';
import ManageItems from './Component/ManageItems/ManageItems';
import MyItems from './Component/MyItems/MyItems';
import Navigation from './Component/Shared/Navbar/Navigation';

function App() {
  return (
    <div >
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path= '/service/:productId' element={<ProductsDetails></ProductsDetails>}></Route>
      </Routes>

    </div>
  );
}

export default App;
