import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MdAddTask } from 'react-icons/md';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Зроби, будь ласка, замітку');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
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
          <TextField
            name="text"
            label="Your todo..."
            margin="normal"
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, gap: 2 }}
          >
            Add todo
            <MdAddTask size={24} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
