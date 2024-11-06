import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import OrderTable from './NavFinance/OrderTable';
import Delivery from './NavFinance/Delivery';
import Supplier from './NavFinance/Supplier';
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

export default function ProductsPage() {
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
            <Tab label="Sales" id="tab-0" />
            <Tab label="Suppliers" id="tab-1" />
            <Tab label="Delivery" id="tab-2" />
          </Tabs>
        </Box>

        <TabPanel value={tabIndex} index={0}>
          <OrderTable />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <Supplier />
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <Delivery />
        </TabPanel>
      </Container>
    </>
  );
}
