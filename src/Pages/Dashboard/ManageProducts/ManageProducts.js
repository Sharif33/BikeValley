import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageProducts = () => {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    // DELETE products
    const handleDeleteProducts = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/bikes/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Canceled successfully');
                        // console.log(data);
                        const remainingProducts = bikes.filter(bike => bike._id !== id);
                        // console.log(remainingOrders);
                        setBikes(remainingProducts);
                    }
                })
        }
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bikes.map((bike) => (
                            <TableRow
                                key={bike._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {bike.name}
                                </TableCell>
                                <TableCell align="right">{bike.price}</TableCell>
                                <TableCell align="right">{bike.id}</TableCell>
                                <TableCell align="right"><div><button className="btn btn-outline-primary">Update</button> <button onClick={() => handleDeleteProducts(bike._id)} className="btn btn-danger">Delete</button></div></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;