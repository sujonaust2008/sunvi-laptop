import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServices from '../Component/Hooks/Hooks';
import '../Component/ManageInventory/ManageInventory.css';

const MyItems = () => {
    const [services, setServices] = useServices();
    const {productId} = useParams();
    const [productDetail, setproductDetail]= useState({});
    useEffect(()=>{
        const URL = `http://localhost:5000/service/${productId}`;
        fetch(URL)
        .then(res=>res.json())
        .then(data=>setproductDetail(data))
    },[])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='my-5 text-center text-decoration-underline text-primary'>Manage your services</h2>
            <Table>
                <tbody>
                    <tr className='tableStyle bg-dark text-white rounded-top'>
                        <td className='fw-bold'>Name</td>
                        <td className='fw-bold text-center'>Price</td>
                        <td className='fw-bold text-center' >Quantity</td>
                        <td className='fw-bold text-center'>Delete</td>
                    </tr>
                </tbody>
            </Table>
            
                    <Table striped>
                        <tbody>
                            <tr className='tableStyle'>
                            
                                <td>{productDetail?.name}</td>
                                <td className='text-center'>{productDetail?.price}</td>
                                <td className='text-center'>{productDetail?.quantity}</td>
                                <td className='text-center'>
                                    <button className='btn rounded px-4' onClick={()=>handleDelete(productDetail?._id)}>
                                        X
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>

            <div className='text-center mt-5'>
                <Link to='/addItems'>
                 <button className='btn btn-primary rounded px-5 text-white fw-bold fs-3'>Add New Items</button>
                </Link>
            </div>
        </div>
    );
};

export default MyItems;