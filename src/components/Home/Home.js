import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Contact />
        </div>
    );
};

export default Home;