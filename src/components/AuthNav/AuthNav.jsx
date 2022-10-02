import { NavigationLink } from 'components/Navigation/NavigationStyled';
import Box from '@mui/material/Box';

export const AuthNav = () => {
  return (
    <Box display="flex" flexDirection="row" gap="16px">
      <NavigationLink to="/register">Registration</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </Box>
  );
};
