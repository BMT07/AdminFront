import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal, Box } from '@mui/material';

const ProductCard = ({ product, onStatusChange }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAccept = () => {
        onStatusChange(product._id, 'accepted');
        handleClose();
    };

    const handleRefuse = () => {
        onStatusChange(product._id, 'refused');
        handleClose();
    };

    return (
        <>
            <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {product.productName || 'Unnamed Product'}
                    </Typography>
                    <Button variant="contained" onClick={handleOpen}>
                        Info
                    </Button>
                </CardContent>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="product-info-title"
                aria-describedby="product-info-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="product-info-title" variant="h6" component="h2">
                        {product.nom || 'Unnamed Product'}
                    </Typography>
                    <Typography id="product-info-description" sx={{ mt: 2 }}>
                        <strong>Category:</strong> {product.category || 'N/A'}<br />
                        <strong>Material:</strong> {product.material || 'N/A'}<br />
                        <strong>Type:</strong> {product.type || 'N/A'}<br />
                        <strong>Description:</strong> {product.description || 'No description available'}<br />
                        <strong>Status:</strong> {product.status || 'N/A'}<br />
                        <strong>Dimensions:</strong><br />
                        Small: {product.dimension_small?.longeur || 'N/A'} x {product.dimension_small?.largeur || 'N/A'} x {product.dimension_small?.hauteur || 'N/A'}, Diameter: {product.dimension_small?.diametre || 'N/A'}, Price: ${product.dimension_small?.price || 'N/A'}<br />
                        Medium: {product.dimension_medium?.longeur || 'N/A'} x {product.dimension_medium?.largeur || 'N/A'} x {product.dimension_medium?.hauteur || 'N/A'}, Diameter: {product.dimension_medium?.diametre || 'N/A'}, Price: ${product.dimension_medium?.price || 'N/A'}<br />
                        Large: {product.dimension_large?.longeur || 'N/A'} x {product.dimension_large?.largeur || 'N/A'} x {product.dimension_large?.hauteur || 'N/A'}, Diameter: {product.dimension_large?.diametre || 'N/A'}, Price: ${product.dimension_large?.price || 'N/A'}<br />
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="success" onClick={handleAccept}>
                            Accept
                        </Button>
                        <Button variant="contained" color="error" onClick={handleRefuse}>
                            Refuse
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ProductCard;
