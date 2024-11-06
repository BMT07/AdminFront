import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import NewProduct from './NavStock/NewProduct';
import Orders from './NavStock/Orders';
import OnTheWay from './NavStock/OnTheWay';
import Returned from './NavStock/Returned';
import Shipped from './NavStock/Shipped';
import Stock from './NavStock/Stock';

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

export default function blog() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Finance</title>
      </Helmet>
      <Container>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabIndex} onChange={handleTabChange} aria-label="tabs for different sections">
            <Tab label="NewOrders" id="tab-0" />
            <Tab label="OnTheWay" id="tab-1" />
            <Tab label="Returned" id="tab-2" />
            <Tab label="Shipped" id="tab-2" />
            <Tab label="Stock" id="tab-2" />
            <Tab label="NewProduct" id="tab-2" />
          </Tabs>
        </Box>

        <TabPanel value={tabIndex} index={0}>
          <Orders />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <OnTheWay />
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <Returned />
        </TabPanel>
        <TabPanel value={tabIndex} index={3}>
          <Shipped />
        </TabPanel>
        <TabPanel value={tabIndex} index={4}>
          <Stock />
        </TabPanel>
        <TabPanel value={tabIndex} index={5}>
          <NewProduct />
        </TabPanel>
      </Container>
    </>
  );
}
