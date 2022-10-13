import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/operations';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { MdDelete } from 'react-icons/md';
import { Text } from './TaskStyled';

export const Task = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <Box display="flex" alignItems="center" gap="12px">
      <Text>{text}</Text>
      <Button type="button" onClick={handleDelete} variant="contained">
        <MdDelete size={24} />
      </Button>
    </Box>
  );
};
