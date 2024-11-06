import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import OrderCard from './OrderCard'; // Assuming OrderCard is in the same directory

const NewOrder = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        // Fetch orders from the backend
        fetch('http://localhost:5000/commande/getAllOrders')  // Replace with your actual API endpoint
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error('Error fetching orders:', error));
    }, []);

    const handleChange = (event, newValue) => {
        setStatus(newValue);
    };

    const handleStatusChange = (orderId, newStatus) => {
        // Update order status in the backend
        fetch(`http://localhost:5000/commande/updateOrderStatus/${orderId}/status`, {  // Replace with your actual API endpoint
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then((res) => res.json())
            .then((updatedOrder) => {
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order._id === orderId ? { ...order, status: updatedOrder.status } : order
                    )
                );
            })
            .catch((error) => console.error('Error updating order status:', error));
    };

    const filteredOrders = orders.filter((order) => order.status === status);

    return (
        <Container>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={status} onChange={handleChange} aria-label="status tabs">
                    <Tab label="Pending" value="pending" />
                    <Tab label="Accepted" value="accepted" />
                    <Tab label="Refused" value="refused" />
                </Tabs>
            </Box>

            <Box sx={{ marginTop: 2 }}>
                {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                        <OrderCard
                            key={order._id}
                            order={order}
                            onStatusChange={handleStatusChange}
                        />
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No orders found for {status} status.
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default NewOrder;
