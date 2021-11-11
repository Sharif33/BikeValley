
import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container my-5 p-5 shadow bg-light rounded">
            <div className="row row-cols-1 row-cols-md-4">
                {
                    reviews?.map(review =>
                        <div key={review._id} className="col my-4">
                            <div className="text-center border bg-white shadow px-1">
                                <img className="img-fluid w-25 rounded-circle" style={{ marginTop: "-2.2rem" }} src={review?.image} alt="" />
                                <h6>{review?.name}</h6>
                                <Rating name="read-only" size="small" value={review?.rating} readOnly />
                                <h6>{review?.bike}</h6>
                                <p className="text-secondary">{review?.description}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Reviews;