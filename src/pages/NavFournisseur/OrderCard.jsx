import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal, Box } from '@mui/material';

const OrderCard = ({ order, onStatusChange }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAccept = () => {
        onStatusChange(order._id, 'accepted');
        handleClose();
    };

    const handleRefuse = () => {
        onStatusChange(order._id, 'refused');
        handleClose();
    };

    return (
        <>
            <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                    <Typography component="div">
                        <strong>Num Commande:</strong>  #{order.numCommande}
                    </Typography>
                    <Typography component="div">
                        <strong> Name Product:</strong>{order.nameProduct}
                    </Typography>
                    <Typography component="div">
                        <strong>id Product:</strong>  {order.nameProduct}
                    </Typography>
                    <Typography component="div">
                        <strong>id Fournisseur:</strong> {order.nameProduct}
                    </Typography>
                    <Typography component="div">
                        <strong>id User:</strong>{order.nameProduct}
                    </Typography>
                    <Typography component="div">
                        <strong>Price:</strong>  {order.price}
                    </Typography>
                    <Typography component="div">
                        <strong>Date_Commande:</strong>  {new Date(order.dateCommande).toISOString().split('T')[0]}
                    </Typography>
                    <Button variant="contained" onClick={handleOpen}>
                        Info
                    </Button>
                </CardContent>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="order-info-title"
                aria-describedby="order-info-description"
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
                    <Typography id="order-info-title" component="h2">
                        Order #{order.numCommande}
                    </Typography>
                    <Typography id="order-info-description" sx={{ mt: 2 }}>
                        <strong>Supplier Information:</strong><br />
                        <strong>Name:</strong> {order.fournisseur?.prenom} {order.fournisseur?.nom}<br />
                        <strong>Email:</strong> {order.fournisseur?.email}<br />
                        <strong>Address:</strong> {order.fournisseur?.adresse}<br />
                        <strong>Phone:</strong> {order.fournisseur?.phone}<br />
                        <strong>Date of Birth:</strong> {order.fournisseur?.naissance}<br />
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

export default OrderCard;
