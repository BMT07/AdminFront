import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, CircularProgress
} from '@mui/material';
import axios from 'axios';

export default function OrdersTable() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/commande/getAllOrders')
            .then(response => {
                setOrders(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the orders!', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Num Commande</strong></TableCell>
                            <TableCell><strong>Nom Produit</strong></TableCell>
                            <TableCell><strong>User ID</strong></TableCell>
                            <TableCell><strong>Product ID</strong></TableCell>
                            <TableCell><strong>Nombre articles</strong></TableCell>
                            <TableCell><strong>Date</strong></TableCell>
                            <TableCell><strong>Price</strong></TableCell>
                            <TableCell><strong>Choix</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order._id}>
                                <TableCell>{order.numCommande}</TableCell>
                                <TableCell>{order.nameProduct}</TableCell>
                                <TableCell>{order.user?.[0]?._id || 'N/A'}</TableCell>
                                <TableCell>{order.produit?.[0]?._id || 'N/A'}</TableCell>
                                <TableCell>{order.nombreArticle}</TableCell>
                                <TableCell>{new Date(order.dateCommande).toLocaleDateString()}</TableCell>
                                <TableCell>{order.price}</TableCell>
                                <TableCell>{order.choix}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
