import React from 'react';
import { useForm } from "react-hook-form";
import './AddItems.css';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className='formStyle  mx-auto'>
            <h2 className='text-center my-5 text-decoration-underline text-success'>Please add a service</h2>
            <form className='d-flex flex-column shadow card p-3 border-info' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />

                <input className='mb-2' placeholder='Price' type="number" {...register("price",{ required: true, maxLength: 20 })} />

                <textarea className='mb-2' placeholder='Description' {...register("description",{ required: true, maxLength: 200 })} />

                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supName",{ required: true, maxLength: 20 })} />

                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity",{ required: true, maxLength: 20 })} />
                
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img",{ required: true})} />
                <button type="submit" value="Add Service" className='btn btn-info text-white fw-bold'>Add Service</button>
            </form>
        </div>
    );
};

export default AddItems;