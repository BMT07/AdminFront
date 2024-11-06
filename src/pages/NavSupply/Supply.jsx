import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import Dashboard from './Dashboard';
import MyProducts from './MyProducts';
import SpecialOrder from './SpecialOrder';
import AddNewProduct from './AddProduct';
import GeneralReport from './GeneralReport';

function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function SupplyPage() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <>
            <Helmet>
                <title>Fournisseur Dashboard</title>
            </Helmet>
            <Container>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabIndex} onChange={handleTabChange} aria-label="tabs for different sections">
                        <Tab label="Dashboard" id="tab-0" />
                        <Tab label="My Products" id="tab-1" />
                        <Tab label="Special Order" id="tab-2" />
                        <Tab label="Add New Product" id="tab-3" />
                        <Tab label="General Report" id="tab-4" />
                    </Tabs>
                </Box>

                <TabPanel value={tabIndex} index={0}>
                    <Dashboard />
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                    <MyProducts />
                </TabPanel>
                <TabPanel value={tabIndex} index={2}>
                    <SpecialOrder />
                </TabPanel>
                <TabPanel value={tabIndex} index={3}>
                    <AddNewProduct />
                </TabPanel>
                <TabPanel value={tabIndex} index={4}>
                    <GeneralReport />
                </TabPanel>
            </Container>
        </>
    );
}
