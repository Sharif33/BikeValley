import React from 'react';
import Header from '../../Shared/Header/Header';
import about from '../../Images/about.jpg';
import million from '../../Images/icon-27-million.svg';
import cities from '../../Images/icon-1250-cities.svg';
import respect from '../../Images/icon-respect.svg';
import agility from '../../Images/icon-agile.svg';
import ownership from '../../Images/icon-ownership.svg';
import webefore from '../../Images/icon-we-before-i.svg';
import Footer from '../../Shared/Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <img className="img-fluid" src={about} alt="" />
            <div className="container px-5">
                <div className="p-3">
                    <h3>About Us</h3>
                    <p>BikeValley's mission is to bring delight in two-wheeler buying, we offer a bouquet of reliable tools and services to help motorcycle and scooter consumers decide on buying the right two-wheeler, at the right price and from the right partner.</p>
                </div>
                <div className="p-3">
                    <h3>Our Group’s Scale</h3>
                    <div className="row gx-5">
                        <div className="col">
                            <div style={{ backgroundColor: "#ECF7F8" }} className="p-3">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid w-25 p-4" src={million} alt="" />
                                    <div className="px-4">
                                        <h3>31.9 Million</h3>
                                        <h6>Monthly Unique Visitors</h6>
                                    </div>
                                </div>
                                <p>Monthly Average Unique Visitors for three months ending Octobor 2021</p>
                            </div>
                        </div>
                        <div className="col">
                            <div style={{ backgroundColor: "#ECF7F8" }} className="p-3">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid w-25 p-4" src={cities} alt="" />
                                    <div className="px-4">
                                        <h3>8,00,000+</h3>
                                        <h6>Vehicles Listed</h6>
                                    </div>
                                </div>
                                <p>Vehicles listed for auction in FY 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-3">
                    <h3>Our Core Values</h3>
                    <div className="row g-2 overflow-hidden">
                        <div className="col-6">
                            <div style={{ backgroundColor: "#FEF7EF" }} className="">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid w-25 p-4" src={respect} alt="" />
                                    <div className="px-4">
                                        <h4>RESPECT</h4>
                                        <h6>We respect our colleagues, customers and partners</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div style={{ backgroundColor: "#ECF7F8" }} className="">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid w-25 p-4" src={agility} alt="" />
                                    <div className="px-4">
                                        <h4>AGILITY</h4>
                                        <h6>We are extremely open and adaptable</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div style={{ backgroundColor: "#ECF7F8" }} className="">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid w-25 p-4" src={ownership} alt="" />
                                    <div className="px-4">
                                        <h4>OWNERSHIP</h4>
                                        <h6>We take ownership of our results</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div style={{ backgroundColor: "#FEF7EF" }} className="">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid w-25 p-4" src={webefore} alt="" />
                                    <div className="px-4">
                                        <h4>WE BEFORE I</h4>
                                        <h6>We always put our company ahead of ourselves</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;