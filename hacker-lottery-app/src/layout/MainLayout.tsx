import { Outlet } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import MainNavbar from './MainNavbar';

const MainLayout = () => (
  <Box
    sx={{
      display: 'flex',
      overflow: 'hidden',
      height: '100%',
      width: '100%',
    }}
  >
    <MainNavbar />
    <Box
      sx={{
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
        paddingTop: 8,
      }}
    >
      <Outlet />
    </Box>
  </Box>
);

export default MainLayout;
