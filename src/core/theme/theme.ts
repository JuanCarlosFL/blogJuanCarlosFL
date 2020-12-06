import {
  createMuiTheme,
  Theme as DefaultTheme,
} from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: '#00FFFF',
    },
    secondary: {
      main: '#333326',
    },
  },
});

type Theme = DefaultTheme;

export const theme: Theme = {
  ...defaultTheme,
};
