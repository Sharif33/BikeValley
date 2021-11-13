import React from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';
import './DashboardHome.css';
import about from '../../../Images/about.jpg';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="bg-welcome">
                <div className="text-center p-3">
                    <img className="img-fluid rounded-circle my-3 shadow" src={user?.photoURL} alt="" />
                    <h1 className="text-warning fw-bold fs-1">Hello! <span className="text-light">{user?.displayName}</span> </h1>
                    <h3><span className="text-light">Welcome to <span className="text-info fw-bold fs-1">BikeValley</span></span></h3>
                </div>
            </div>
            <div>
                {/* <img className="img-fluid" src="https://i.ibb.co/QKMkyv5/price-specs-bg.png" alt="" /> */}
                <img className="img-fluid" src={about} alt="" />
            </div>
        </>
    );
};

export default DashboardHome;