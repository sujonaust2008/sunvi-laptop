import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import useServices from '../Component/Hooks/Hooks';
import auth from '../firebase.init';
import './MyItems.css';

const MyItems = ({cart, setCart}) => {

    const [user] = useAuthState(auth);
    // const {_id}= cartItem;
    // console.log(cartItem.name);
    const [services, setServices] = useServices();
    // // const {productId} = useParams();
    // // const [productDetail, setproductDetail]= useState({});
    // // useEffect(()=>{
    // //     const URL = `https://floating-sands-97390.herokuapp.com/service/${productId}`;
    // //     fetch(URL)
    // //     .then(res=>res.json())
    // //     .then(data=>setproductDetail(data))
    // // },[])
    // const addLastItem = services[services.length-1];
    
    const handleDelete = id =>{
        const arr = cart.filter(item=>item._id !==id);
        setCart(arr);

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
            <h2 className='my-5 text-center text-decoration-underline text-primary'>Your Added Services</h2>
            <Table>
                <tbody>
                    <tr className='tableStyleMyitems  bg-dark text-white rounded-top'>
                        <td className='fw-bold'>Name</td>
                        <td className='fw-bold text-center'>Price</td>
                        <td className='fw-bold text-center' >Quantity</td>
                        <td className='fw-bold text-center'>Delete</td>
                    </tr>
                </tbody>
            </Table>
            
            {
                cart.map(addItemsToCart => <div key={addItemsToCart._id}>
                    <Table striped>
                        <tbody>
                            <tr className='tableStyleMyitems '>
                            
                                <td>{addItemsToCart.name}</td>
                                <td className='text-center'>{addItemsToCart.price}</td>
                                <td className='text-center'>{addItemsToCart.quantity}</td>
                                
                                <td className='text-center'>
                                    <button className='btn rounded px-4' onClick={()=>handleDelete(addItemsToCart._id)}>
                                        X
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>   
                </div>)
            }

            <div className='text-center mt-5'>
                <Link to='/addItems'>
                 <button className='btn btn-primary rounded px-5 text-white fw-bold fs-3'>Add New Items</button>
                </Link>
            </div>
        </div>
    );
};

export default MyItems;