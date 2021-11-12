import React from 'react';
import bm1 from "../../../Images/tvs.jpg"
import bm2 from "../../../Images/suzuki.jpg"
import bm3 from "../../../Images/hero.jpg"
import bm4 from "../../../Images/honda.jpg"
import bm5 from "../../../Images/royel.jpg"
import bm6 from "../../../Images/harely.jpg"
import bm7 from "../../../Images/bmw.jpg"
import bm8 from "../../../Images/bajaj.jpg"
import bm9 from "../../../Images/ktm.jpg"
import bm10 from "../../../Images/yamaha.jpg"

const BannerMid = () => {
    return (
        <div className="shadow">
            <div className="container mx-auto text-center p-4 mb-3">
                <h3 className="">Choose your Brand</h3>
                <p>Here is our top brands</p>
                <div className="row row-cols-md-5 row-cols-2 container">
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
        </div>
    );
};

export default BannerMid;