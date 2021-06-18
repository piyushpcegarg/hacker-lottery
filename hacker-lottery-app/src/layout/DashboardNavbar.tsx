import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';

interface Props {
  setMobileNavOpen: (isMobileNavOpen: boolean) => void;
}

const DashboardNavbar = ({ setMobileNavOpen }: Props) => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => setMobileNavOpen(true)}
          sx={{
            display: { xs: 'block', lg: 'none' },
          }}>
          <MenuIcon />
        </IconButton>
        <Typography variant={"h5"}>
            Hacker Lottery
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default DashboardNavbar;
