import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Bike from '../Bike/Bike';

const ExploreBikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch(`https://stormy-tundra-73783.herokuapp.com/bikes`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="text-center pt-2">
                    <h2 className="fw-bold">Best Bikes of Bike Valley</h2>
                    <p className="text-secondary">When you have more than 200 different motorcycle models, it gets difficult to choose the best bike. With an enormous amount of data being generated everyday by bike buyers in Bangladesh on BikeValley, this list of best bikes truly reflects the popularity of bikes in Bangladesh. We bring you information about ex-showroom price, colors, variants, monthly units sold, popularity and launch date of best bikes to help you pick the best one. Explore the list of best bikes in Bangladesh to find a suitable bike for your needs.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                    {bikes.length == 0 ?
                        <div className="w-100 text-center">
                            <CircularProgress />
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
            <Footer></Footer>
        </>
    );
};

export default ExploreBikes;