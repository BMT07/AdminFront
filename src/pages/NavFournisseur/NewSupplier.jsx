import React, { useEffect, useState } from 'react';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import SupplierCard from './SupplierCard';

const NewSupplier = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        fetch('http://localhost:5000/supplier/allfournisseurs')
            .then((res) => res.json())
            .then((data) => setSuppliers(data))
            .catch((error) => console.error('Error fetching suppliers:', error));
    }, []);

    const handleChange = (event, newValue) => {
        setStatus(newValue);
    };

    const handleStatusChange = (id, newStatus) => {
        fetch(`http://localhost:5000/supplier/changeStatus/${id}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),    
        })
            .then((res) => res.json())
            .then((updatedSupplier) => {
                setSuppliers((prevSuppliers) =>
                    prevSuppliers.map((supplier) =>
                        supplier._id === id ? updatedSupplier : supplier
                    )
                );
            })
            .catch((error) => console.error('Error updating supplier status:', error));
    };

    const filteredSuppliers = suppliers.filter((supplier) => supplier.status === status);

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
                {filteredSuppliers.length > 0 ? (
                    filteredSuppliers.map((supplier) => (
                        <SupplierCard
                            key={supplier._id}
                            supplier={supplier}
                            onStatusChange={handleStatusChange}
                        />
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No suppliers found for {status} status.
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default NewSupplier;
