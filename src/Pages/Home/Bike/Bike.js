import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';


const Bike = ({ bike }) => {
    const { _id, name, image, description, keySpecs, price, rating, reviews } = bike;
    return (
        <div>
            <div className="col rounded shadow text-center">
                <div className="card h-100">
                    <h5 className="text-dark pt-3">{name}</h5>
                    <div className="d-flex justify-content-between px-4">
                        <p>Price: <span className="text-danger">{price} BDT</span></p>
                        <Box sx={{
                            '& > legend': { mt: 2 },
                        }}>
                            {/* <Rating name="size-small" size="small" value={rating} readOnly />  */}
                            <Rating name="half-rating-read" precision={0.5} size="small" value={Number(rating)} readOnly /><span>({reviews})</span>
                        </Box>
                    </div>
                    <img style={{ height: "15rem" }} src={image} className="card-img-top" alt="" />
                    <div className="p-4">
                        <p className="text-warning">{keySpecs}</p>
                        <p className="text-secondary">{description.slice(0, 120)}...</p>
                    </div>

                    <div className="border-top p-2 d-flex justify-content-between">
                        <Link to={`bike/${_id}`}><button className="btn btn-outline-success">Details</button></Link>
                        <Link to={`bike/${_id}`}><button className="btn btn-outline-danger">BUY NOW</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bike;