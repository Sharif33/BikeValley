import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddBike = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/bikes', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-bikes p-4 col-md-6 mx-auto">
            <div className="shadow p-4 rounded bg-custom">
                <h2 className="text-light py-2">Please Add a Bike</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
                    <input {...register("keySpecs", { required: true, maxLength: 100 })} placeholder="Key Specification" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("id")} placeholder="ID" />
                    <input type="number" {...register("contact")} placeholder="Phone Number" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input type="number" {...register("rating")} placeholder="Rating" />
                    <input type="number" {...register("reviews")} placeholder="Reviews" />
                    <input {...register("image")} placeholder="image url" />
                    <input className="btn btn-dark" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddBike;