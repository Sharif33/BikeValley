import React from 'react';
import Header from '../../../Shared/Header/Header';
import Bikes from '../Bikes/Bikes';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Bikes></Bikes>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;