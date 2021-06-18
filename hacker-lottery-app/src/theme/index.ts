import { createTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: deepPurple,
    background: {
      default: '#f4f6f8'
    }
  }
});

export default theme;
