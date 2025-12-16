import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '0.75rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1.25rem',
    },
    body2: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem',
    },
    subtitle1: {
      fontSize: '1rem',
      marginTop: '1rem',
    },
  },
});

export default theme;