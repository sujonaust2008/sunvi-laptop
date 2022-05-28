import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Products from './Products';
import ReChart from './ReChart';

const home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ReChart></ReChart>
            <ContactUs></ContactUs>
        </div>
    );
};

export default home;