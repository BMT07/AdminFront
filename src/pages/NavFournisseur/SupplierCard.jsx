// SupplierCard.js
import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Box } from '@mui/material';
// import { CheckCircle, Cancel } from '@mui/icons-material';

const SupplierCard = ({ supplier, onStatusChange }) => {
    const handleAccept = () => {
        onStatusChange(supplier._id, 'accepted');
    };

    const handleRefuse = () => {
        onStatusChange(supplier._id, 'refused');
    };

    return (
        <Card variant="outlined" sx={{ marginBottom: 2, maxWidth: 400 }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {supplier.nom} {supplier.prenom}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Email: {supplier.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Phone: {supplier.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Status: {supplier.status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Date_naissance: {supplier.naissance}
                </Typography>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Button
                        variant="contained"
                        color="success"
                        // startIcon={<CheckCircle />}
                        onClick={handleAccept}
                        disabled={supplier.status === 'accepted'}
                    >
                        Accept
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        // startIcon={<Cancel />}
                        onClick={handleRefuse}
                        disabled={supplier.status === 'refused'}
                    >
                        Refuse
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default SupplierCard;
