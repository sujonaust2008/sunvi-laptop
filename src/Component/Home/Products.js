import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Home.css';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div className='productsStyle'>
                {
                    products.map(product=><Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className='text-center'>
                <Link to='/manageInventory'>
                 <button className='btn btn-primary rounded px-5 text-white fw-bold fs-3'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;