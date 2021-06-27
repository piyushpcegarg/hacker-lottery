import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <AppBar>
    <Toolbar>
      <Link to="/">
        <img
          alt="Logo"
          src="/static/images/logo.png"
          height="36"
        />
      </Link>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
