import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TbLogin } from 'react-icons/tb';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
          sx={{ mt: 1 }}
        >
          <label>
            {/* Email */}
            <TextField
              type="email"
              name="email"
              label="Email"
              margin="normal"
              fullWidth
            />
          </label>
          <label>
            {/* Password */}
            <TextField
              type="password"
              name="password"
              label="Password"
              margin="normal"
              fullWidth
            />
          </label>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, gap: 1 }}
          >
            <TbLogin size={24} />
            Log in
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
