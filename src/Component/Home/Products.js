import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Home.css';

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
        </div>
    );
};

export default Products;