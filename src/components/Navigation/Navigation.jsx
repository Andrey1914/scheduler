import { NavigationLink } from './NavigationStyled';
import { useAuth } from 'hooks/useAuth';
import Box from '@mui/material/Box';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/tasks">Tasks</NavigationLink>}
    </Box>
  );
};
