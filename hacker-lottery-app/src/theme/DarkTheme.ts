import { createTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

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
