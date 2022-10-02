import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          width="100%"
          sx={{ mt: 1 }}
        >
          <label>
            {/* Name */}
            <TextField
              type="text"
              name="name"
              label="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              margin="normal"
              fullWidth
            />
          </label>
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
            sx={{ mt: 3, mb: 2 }}
          >
            Registration
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
