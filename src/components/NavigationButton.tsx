import Button from '@mui/material/Button';

interface NavigationButtonProps {
  direction: 'next' | 'previous';
  navigate: (direction: 'next' | 'previous') => void;
  disabled?: boolean;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, navigate, disabled = false }) => {
  return (
    <Button
      variant="outlined"
      onClick={() => navigate(direction)}
      disabled={disabled}
    >
      {direction === 'next' ? '>' : '<'}
    </Button>
  );
};

export default NavigationButton;