import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth/useAuth';

const SingleBike = () => {
    const { user } = useAuth();

    const { id } = useParams();

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${id}`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [id])
    return (
        <div>
            <h2>{bikes?.name}</h2>
        </div>
    );
};

export default SingleBike;