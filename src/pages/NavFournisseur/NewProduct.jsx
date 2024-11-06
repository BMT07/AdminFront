// NewProduct.js
import React, { useEffect, useState } from 'react';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const NewProduct = () => {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState('pending');
    console.log(products)
    useEffect(() => {
        fetch('http://localhost:5000/produit/getAllProduit')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const handleChange = (event, newValue) => {
        setStatus(newValue);
    };

    const handleStatusChange = (id, newStatus) => {
        fetch(`http://localhost:5000/produit/updateStatusProduit/${id}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then((res) => res.json())
            .then((updatedProduct) => {
                setProducts((prevProducts) =>
                    prevProducts.map((product) =>
                        product._id === id ? updatedProduct : product
                    )
                );
            })
            .catch((error) => console.error('Error updating product status:', error));
    };

    const filteredProducts = products.filter((product) => product.status === status);

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
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            onStatusChange={handleStatusChange}
                        />
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No products found for {status} status.
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default NewProduct;
