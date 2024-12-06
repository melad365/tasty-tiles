import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';

const Header = ({ appName, logo }) => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#E4D2BA', width: '100%'  }}>
      <Toolbar>
        {logo && (
          <Box
            component="img"
            src={logo}
            alt={`${appName} Logo`}
            sx={{ height: '40px', marginRight: '16px' }}
          />
        )}
        {/* App Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black' }}>
            {appName}
        </Typography>

        {/* Navigation Tabs */}
        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'black', // Ensure the indicator color is explicitly black
            },
          }}
        >
            <Tab label="Home" sx={{ color: 'black' }} />
            <Tab label="Recipes" sx={{ color: 'black' }} />
            <Tab label="About" sx={{ color: 'black' }} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
