import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import about from '../../Images/about.jpg';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <img className="img-fluid" src={about} alt="" />
            <div className="container p-5">
                <h3>Contact Us</h3>
                <p>Let's bring joy and delight to the process of bike buying together.</p>
                <div className="row g-2">
                    <div style={{ backgroundColor: "#ECF7F8" }} className="col-6">
                        <div className="p-3 ">
                            <h5 className="fw-bold">Customer support: <small className="text-secondary fw-normal"> info123@bikevalley.com</small></h5>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#FEF7EF" }} className="col-6">
                        <div className="p-3 "><h5 className="fw-bold">New Bike Dealer:
                            <small className="text-secondary fw-normal"> info123@bikevalley.com</small></h5></div>
                    </div>
                    <div style={{ backgroundColor: "#FEF7EF" }} className="col-6">
                        <div className="p-3 "><h5 className="fw-bold">Enterprise Sales Inquiries:
                            <small className="text-secondary fw-normal"> esteam@bikevalley.com</small></h5></div>
                    </div>
                    <div style={{ backgroundColor: "#ECF7F8" }} className="col-6">
                        <div className="p-3 "><h5 className="fw-bold">Adress: <small className="text-secondary fw-normal">BikeValley Trade Limited, Shahid IT Park, Dhaka, Bangladesh</small></h5></div>
                    </div>
                </div>
            </div>

            <div className="container p-5">
                <h3 className="text-center fw-bold p-3">Frequently asked questions & answers</h3>
                <div className="bg-light p-4 rounded">
                    <h5>Q: Which is the most affordable bike?</h5>
                    <p>A: Most economical bike available in Bangladesh is TVS XL100 Heavy Duty which is priced at 70,556.</p>
                    <hr />
                    <h5>Q: Which are the popular bikes?</h5>
                    <p>A: Top bikes available in Bangladesh are Ducati Hypermotard 950, Kawasaki Z650 RS and Honda Dio.</p>
                    <hr />
                    <h5>Q: Are there any upcoming bikes?</h5>
                    <p>A: Honda PCX 125 is expected to launch soon in Bangladesh at an expected price of 1,05,000.</p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ContactUs;