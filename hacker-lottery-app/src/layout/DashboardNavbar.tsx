import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import LightThemeIcon from '@mui/icons-material/BrightnessLow';
import DarkThemeIcon from '@mui/icons-material/BrightnessHigh';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToApp from '@mui/icons-material/ExitToApp';
import TranslateIcon from '@mui/icons-material/Translate';
import { getAuth, signOut } from 'firebase/auth';
import { UserContext, UserPreferenceContext } from '../App';
import { Link } from 'react-router-dom';

const localeOptions = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Hindi',
    value: 'hi',
  },
];

const logout = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log('Sign-out successful.');
  }).catch((error) => {
    console.error(error);
  });
};

interface Props {
  setMobileNavOpen: (isMobileNavOpen: boolean) => void;
}

const DashboardNavbar = ({ setMobileNavOpen }: Props) => {
  const { setLocale, theme, setTheme } = useContext<UserContext>(UserPreferenceContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>) => {
    const { locale } = event.currentTarget.dataset;
    setAnchorEl(null);
    setLocale(locale || 'en');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => setMobileNavOpen(true)}
          sx={{
            display: { xs: 'block', lg: 'none' },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <img
            alt="Logo"
            src="/static/images/logo.png"
            height="36" />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        {theme === 'light' ? (
          <IconButton
            color="inherit"
            onClick={() => setTheme('dark')}>
            <LightThemeIcon />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            onClick={() => setTheme('light')}>
            <DarkThemeIcon />
          </IconButton>
        )}
        <IconButton
          color="inherit"
          aria-controls="locale-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <TranslateIcon />
        </IconButton>
        <Menu
          id="locale-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {localeOptions.map((locale) => (
            <MenuItem
              key={locale.value}
              data-locale={locale.value}
              onClick={handleMenuItemClick}
            >
              {locale.name}
            </MenuItem>
          ))}
        </Menu>
        <IconButton
          color="inherit"
          onClick={logout}>
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
