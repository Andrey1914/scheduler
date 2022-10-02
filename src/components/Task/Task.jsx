import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/operations';
import { MdDelete } from 'react-icons/md';

import { Box } from 'components/Box';
import { Text } from './TaskStyled';

export const Task = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));
  // const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <Box display="flex" alignItems="center" gridGap="12px" p="8px 0">
      {/* <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      /> */}
      <Text>{text}</Text>
      <button type="button" onClick={handleDelete}>
        <MdDelete size={24} />
      </button>
    </Box>
  );
};
