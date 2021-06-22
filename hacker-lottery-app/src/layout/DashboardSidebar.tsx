import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  Typography,
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  Grid as GridIcon,
  Home as HomeIcon,
  Lock as LockIcon,
  PlusSquare as PlusSquareIcon,
  Settings as SettingsIcon,
  UserPlus as UserPlusIcon,
  Gift as GiftIcon
} from 'react-feather';
import NavItem from './NavItem';
import firebase from 'firebase/app';
import 'firebase/auth';

const items = [
  {
    href: '/app/dashboard',
    icon: HomeIcon,
    title: 'dashboard',
  },
  {
    href: '/app/lobby',
    icon: GridIcon,
    title: 'lobby',
  },
  {
    href: '/app/add',
    icon: PlusSquareIcon,
    title: 'add',
  },
  {
    href: '/app/winner',
    icon: GiftIcon,
    title: 'winner',
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'settings',
  },
  {
    href: '/signin',
    icon: LockIcon,
    title: 'login',
  },
  {
    href: '/signup',
    icon: UserPlusIcon,
    title: 'register',
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'error',
  },
];

interface Props {
  setMobileNavOpen: (isMobileNavOpen: boolean) => void;
  openMobile: boolean;
}

const DashboardSidebar = ({ setMobileNavOpen, openMobile }: Props) => {
  const location = useLocation();
  const user = firebase.auth().currentUser;

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname, setMobileNavOpen]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <Avatar
          component={RouterLink}
          src={user?.photoURL || ''}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64,
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5">
          {user?.displayName}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2">
          {user?.email}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="left"
        onClose={() => setMobileNavOpen(false)}
        open={openMobile}
        variant="temporary"
        PaperProps={{
          sx: {
            width: 256,
            display: { xs: 'block', lg: 'none' },
          },
        }}
      >
        {content}
      </Drawer>
      <Drawer
        anchor="left"
        open
        variant="persistent"
        PaperProps={{
          sx: {
            width: 256,
            top: 64,
            height: 'calc(100% - 64px)',
            display: { xs: 'none', lg: 'block' },
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
};

DashboardSidebar.propTypes = {
  setMobileNavOpen: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  openMobile: false,
};

export default DashboardSidebar;
