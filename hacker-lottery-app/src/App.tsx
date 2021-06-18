import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import routes from './routes';
import theme from './theme';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* CssBaseline to kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {routing}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
