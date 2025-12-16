import React from 'react';
import Typography from '@mui/material/Typography';

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ current, total }) => {
  return (
    <Typography variant="subtitle1" sx={{ margin: 0 }}>
      {current} of {total}
    </Typography>
  );
};

export default ProgressIndicator;