import React, { useEffect, useState } from 'react';

import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    return (
        <div className="container">
            <div className="text-center pt-2">
                <h2 className="fw-bold">Best Bikes</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                {bikes.length == 0 ?
                    <div className="d-flex justify-content-center fs-1">
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                    :
                    bikes.map(bike => <Bike
                        key={bike._id}
                        bike={bike}
                    >
                    </Bike>)
                }
            </div>
        </div>
    );
};

export default Bikes;