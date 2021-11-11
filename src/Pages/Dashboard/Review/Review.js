import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);

        axios.post(`http://localhost:5000/reviews`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-resort p-4 col-md-6 mx-auto">
            <div className="shadow p-4 bg-custom rounded">
                <h2 className="py-2">Please Add a Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-100 m-2 p-2 rounded" defaultValue={user?.displayName} {...register("name")} />
                    <input className="w-100 m-2 p-2 rounded" defaultValue={user?.email} {...register("email")} />
                    <input className="w-100 m-2 p-2 rounded" defaultValue={user?.photoURL} {...register("image")} />
                    <input className="w-100 m-2 p-2 rounded" type="number" {...register("rating")} placeholder="Rating" />
                    <input className="w-100 m-2 p-2 rounded" {...register("bike")} placeholder="Bike name" />
                    <textarea className="w-100 m-2 p-2 rounded" {...register("description")} placeholder="Review" />
                    <Button type="submit" variant="outlined">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Review;