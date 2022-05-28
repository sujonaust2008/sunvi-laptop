import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../Hooks/Hooks';
import './ManageInventory.css';



const ManageInventory = ({handleAddtoCart}) => {
    const [services, setServices] = useServices();

    // const [cart, setCart]=useState([]);

    // const handleAddtoCart = service=>{
    //     const newCart = [...cart,service];
    //     setCart(newCart);
    // }

    const handleDelete = id =>{
        const proceed = window.confirm('Are you want to delete?');
        if(proceed){
            const url = `https://floating-sands-97390.herokuapp.com/service/${id}`;
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
        <div className='w-75 mx-auto'>
            <h2 className='my-5 text-center text-decoration-underline text-primary'>Manage your services</h2>
            <Table>
                <tbody>
                    <tr className='tableStyle bg-dark text-white rounded-top'>
                        <td className='fw-bold'>Name</td>
                        <td className='fw-bold text-center'>Price</td>
                        <td className='fw-bold text-center' >Quantity</td>
                        <td className='fw-bold text-center' >Service</td>
                        <td className='fw-bold text-center'>Delete</td>
                    </tr>
                </tbody>
            </Table>
            {
                services.map(service => <div key={service._id}>
                    <Table striped>
                        <tbody>
                            <tr className='tableStyle'>
                            
                                <td>{service.name}</td>
                                <td className='text-center'>{service.price}</td>
                                <td className='text-center'>{service.quantity}</td>
                                <td className='text-center'>
                                    <button className='btn rounded px-4' onClick={()=>handleAddtoCart(service)}>
                                        ByNow
                                    </button>
                                </td>
                                <td className='text-center'>
                                    <button className='btn rounded px-4' onClick={()=>handleDelete(service._id)}>
                                        X
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>

                    
                </div>)
            }
            {/* {
                cart.map(cartItem=><MyItems
                    key={cartItem.id}
                    cartItem={cartItem}
                ></MyItems>)
            } */}
            <div className='text-center mt-5'>
                <Link to='/addItems'>
                 <button className='btn btn-primary rounded px-5 text-white fw-bold fs-3'>Add New Items</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageInventory;