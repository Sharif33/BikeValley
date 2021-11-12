import React from 'react';
import Header from '../../../Shared/Header/Header';
import BannerMid from '../Banner/BannerMid';
import BannerTop from '../Banner/BannerTop';
import Bikes from '../Bikes/Bikes';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BannerTop></BannerTop>
            <BannerMid></BannerMid>
            <Bikes></Bikes>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;