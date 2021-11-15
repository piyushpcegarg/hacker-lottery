import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

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
