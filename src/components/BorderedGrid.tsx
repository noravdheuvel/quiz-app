import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const BorderedGrid = styled(Grid)(({ theme }) => ({
  border: `2px solid ${theme.palette.grey[300]}`,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

export default BorderedGrid;