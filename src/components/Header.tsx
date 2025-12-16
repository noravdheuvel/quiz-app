import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Grid size={12} bgcolor="primary.main" color="primary.contrastText" padding={4}>
      <Typography variant="h1">{title}</Typography>
    </Grid>
  );
};

export default Header;