import React from 'react';
import bm1 from "../../../Images/tvs.jpg";
import bm2 from "../../../Images/suzuki.jpg";
import bm3 from "../../../Images/hero.jpg";
import bm4 from "../../../Images/honda.jpg";
import bm5 from "../../../Images/royel.jpg";
import bm6 from "../../../Images/harely.jpg";
import bm7 from "../../../Images/bmw.jpg";
import bm8 from "../../../Images/bajaj.jpg";
import bm9 from "../../../Images/ktm.jpg";
import bm10 from "../../../Images/yamaha.jpg";
import bike1 from "../../../Images/bike-11.webp";
import bike2 from "../../../Images/bike-12.webp";
import { Link } from 'react-router-dom';

const BannerMid = () => {
    return (
        <div style={{ backgroundColor: "#EEECEB" }} className="">
            <div className="container mx-auto text-center p-4 mb-3">
                <h3 className="">Choose your Brand</h3>
                <p>to explore more bikes</p>
                <div className="row row-cols-md-5 row-cols-2 rounded bg-light p-4">
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm1} alt="" />
                    </div>
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm2} alt="" />
                    </div>
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm3} alt="" />
                    </div>
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm4} alt="" />
                    </div>
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm5} alt="" />
                    </div>
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm6} alt="" />
                    </div>
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm7} alt="" />
                    </div>
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm8} alt="" />
                    </div>
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm9} alt="" />
                    </div>
                    <div className="col p-2">
                        <img className="img-fluid  w-75" src={bm10} alt="" />
                    </div>
                </div>
            </div>
            <div className="container p-4">
                <div className="row g-0 d-flex justify-content-center align-items-center mb-5">
                    <div className="col-sm-6 col-md-6">
                        <img className="img-fluid" src={bike2} alt="" />
                    </div>
                    <div className="col-sm-6 col-md-6 p-4">
                        <h1>2021 Sportster</h1>
                        <p>A new chapter opens in H-D’s longest running family, powered by the all-new Revolution™ Max 1250T. To call it the ultimate Sportster™ is an understatement.</p>
                        <Link to="/bikes"><button className="btn btn-danger">CHECK OUT THE BIKE</button></Link>
                    </div>
                </div>
                <div className="row g-0 d-flex justify-content-center align-items-center">
                    <div className="col-sm-6 col-md-6 p-4">
                        <h1>In Pursuit of Adventure</h1>
                        <p>A new chapter opens in H-D’s longest running family, powered by the all-new Revolution™ Max 1250T. To call it the ultimate Sportster™ is an understatement.</p>
                        <Link to="/bikes"><button className="btn btn-danger">CHECK OUT THE BIKE</button></Link>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <img className="img-fluid" src={bike1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerMid;