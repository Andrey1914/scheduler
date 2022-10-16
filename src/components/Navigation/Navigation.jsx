import { NavigationLink } from './NavigationStyled';
import { useAuth } from 'hooks/useAuth';
import Box from '@mui/material/Box';
import { BsListTask } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <NavigationLink to="/">
        {/* Home */}
        <FaHome size={24} />
      </NavigationLink>
      {isLoggedIn && (
        <NavigationLink to="/tasks">
          {/* Tasks */}
          <BsListTask size={24} />
        </NavigationLink>
      )}
    </Box>
  );
};
