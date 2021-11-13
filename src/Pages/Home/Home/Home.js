import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
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
            <div>
                <h3 className="text-center py-4">User Review</h3>
                <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;