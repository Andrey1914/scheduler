import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TbLogout } from 'react-icons/tb';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Box component="p" sx={{ m: 0 }} color="#fff">
        Welcome, {user.name}
      </Box>
      <Button
        type="button"
        variant="contained"
        sx={{ p: 1 }}
        onClick={() => dispatch(logOut())}
      >
        <TbLogout size={24} />
      </Button>
    </Box>
  );
};
