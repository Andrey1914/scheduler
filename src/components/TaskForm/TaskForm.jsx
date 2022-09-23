import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { addTask } from 'redux/tasksSlice';
import { Box } from 'components/Box';
import { Input } from './TaskFormStyled';
import { MdAddTask } from 'react-icons/md';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <Box onSubmit={handleSubmit} as="form" display="flex" gridGap="4px">
      <Input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">
        Add task
        <MdAddTask size={24} />
      </Button>
    </Box>
  );
};
