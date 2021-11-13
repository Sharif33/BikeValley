import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch(`https://stormy-tundra-73783.herokuapp.com/bikes`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    return (
        <div className="container">
            <div className="text-center pt-2">
                <h1 className="fw-bold text-primary p-2">Our top <span className="text-danger">6</span> Bikes</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                {bikes.length == 0 ?
                    <div className="w-100 text-center">
                        <CircularProgress />
                    </div>
                    :
                    bikes.slice(0, 6).map(bike => <Bike
                        key={bike._id}
                        bike={bike}
                    >
                    </Bike>)
                }
            </div>
            <div className="text-center pt-4">
                <Link to="/bikes"><button className="btn btn-outline-primary p-3 rounded-pill">View More</button></Link>
            </div>
        </div>
    );
};

export default Bikes;