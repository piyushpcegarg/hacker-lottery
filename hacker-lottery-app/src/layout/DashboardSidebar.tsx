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

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Piyush Garg',
};

const items = [
  {
    href: '/app/dashboard',
    icon: HomeIcon,
    title: 'Dashboard',
  },
  {
    href: '/app/lobby',
    icon: GridIcon,
    title: 'Lobby',
  },
  {
    href: '/app/lobby/add',
    icon: PlusSquareIcon,
    title: 'Add',
  },
  {
    href: '/app/winner',
    icon: GiftIcon,
    title: 'Winner',
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings',
  },
  {
    href: '/signin',
    icon: LockIcon,
    title: 'Login',
  },
  {
    href: '/signup',
    icon: UserPlusIcon,
    title: 'Register',
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error',
  },
];

interface Props {
  setMobileNavOpen: (isMobileNavOpen: boolean) => void;
  openMobile: boolean;
}

const DashboardSidebar = ({ setMobileNavOpen, openMobile }: Props) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && setMobileNavOpen) {
      setMobileNavOpen(false);
    }
  }, [location.pathname]);

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
          src={user.avatar}
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
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2">
          {user.jobTitle}
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
