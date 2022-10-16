import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import Box from '@mui/material/Box';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box component="header" display="flex" backgroundColor="#1976d2">
      <Box
        width="75%"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 3,
          marginX: 'auto',
          gap: 5,
        }}
      >
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Box>
  );
};
