import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

const DarkTheme = createTheme({
  palette: {
    primary: deepPurple,
    mode: 'dark',
    background: {
      default: '#212121'
    }
  }
});

export default DarkTheme;
