import { createTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const LightTheme = createTheme({
  palette: {
    primary: deepPurple,
    mode: 'light',
    background: {
      default: '#f4f6f8'
    }
  }
});

export default LightTheme;
