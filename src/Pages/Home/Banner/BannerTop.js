import React from 'react';
import { Link } from 'react-router-dom';
import slide from '../../../Images/b-1.webp';
import slide2 from '../../../Images/b-2.webp';
import slide3 from '../../../Images/b-3.webp';

const BannerTop = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block ">
                            <h1 style={{ fontSize: "4em" }}>FIND THE RIGHT BIKE</h1>
                            <p>Get Comprehensive Information on Bike Prices, Specs, Reviews & More!</p>
                            <Link to="/about"><button className="btn btn-outline-danger p-3 rounded-pill">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 style={{ fontSize: "4em" }}>FIND THE RIGHT BIKE</h5>
                            <p>Get Comprehensive Information on Bike Prices, Specs, Reviews & More!</p>
                            <Link to="/about"><button className="btn btn-outline-warning p-3 rounded-pill">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 style={{ fontSize: "4em" }}>FIND THE RIGHT BIKE</h5>
                            <p>Get Comprehensive Information on Bike Prices, Specs, Reviews & More!</p>
                            <Link to="/about"><button className="btn btn-outline-danger p-3 rounded-pill">Learn More</button></Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default BannerTop;