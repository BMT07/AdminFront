
import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import { Menu, AppBar, Toolbar, Button, Typography, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { UserView } from 'src/sections/user/view';


// ----------------------------------------------------------------------

export default function UserPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SalesAdmin
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Commande
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: '200px',
              },
            }}
          >
            <MenuItem onClick={() => navigate('/newOrder')} >NewOrder</MenuItem>
          </Menu>
          <Button color="inherit" onClick={() => navigate('/newSupplier')}>NewSupplier</Button>
          <Button color="inherit" onClick={() => navigate('/newProduct')}>NewProduct</Button>
          <Button color="inherit">Statistique</Button>
        </Toolbar>
      </AppBar>



      {/* <UserView /> */}
    </>
  );
}
