import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Home.css';

const ProductsDetails = () => {
    const {productId} = useParams();
    const [productDetail, setproductDetail]= useState({});
    useEffect(()=>{
        const URL = `http://localhost:5000/service/${productId}`;
        fetch(URL)
        .then(res=>res.json())
        .then(data=>setproductDetail(data))
    },[])
    return (
        <div className='mx-auto productDetail'>
            <div>
                <Card className='p-3 cardHeight'>
                    <Card.Img variant="top" src={productDetail?.img} className="productsImg"/>
                    <Card.Body>
                        <Card.Title>{productDetail?.name}</Card.Title>
                        <Card.Text>{productDetail?.description}
                        </Card.Text>
                        <Card.Text className='fw-bold'>Price: ${productDetail?.price}
                        </Card.Text>
                        <Card.Text className='fw-bold'>Supplier: {productDetail?.supName}
                        </Card.Text>
                        <Card.Text className='fw-bold'>Quantity: {productDetail?.quantity}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className='text-center'>
                        <button className='btn btn-primary rounded px-3'>Delivered</button>
                    </Card.Body>
                </Card>
            </div>
            <div className='text-center mt-2'>
                <form action="">
                    <input type="text" placeholder='add quantity' name='number'></input>
                    <input type="submit" value='Restock' className='bg-primary text-white border-primary rounded-3'></input>
                </form>
            </div>
        </div>
    );
};

export default ProductsDetails;