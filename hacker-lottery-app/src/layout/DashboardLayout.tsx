import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
      }}
    >
      <DashboardNavbar setMobileNavOpen={setMobileNavOpen} />
      <DashboardSidebar
        setMobileNavOpen={setMobileNavOpen}
        openMobile={isMobileNavOpen}
      />
      <Box
        sx={{
          flex: '1 1 auto',
          height: '100%',
          overflow: 'auto',
          paddingTop: 8,
          paddingLeft: {
            lg: 32,
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
