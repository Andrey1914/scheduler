import { useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import { Box } from 'components/Box';
import { Button, Checkbox, Text } from './TaskStyled';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <Box display="flex" alignItems="center" gridGap="12px" p="8px 0">
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <Text>{task.text}</Text>
      <Button onClick={handleDelete}>
        <MdDelete size={24} />
      </Button>
    </Box>
  );
};
