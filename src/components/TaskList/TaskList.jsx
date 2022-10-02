import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectAllTasks } from 'redux/tasks/selectors';
import { Item } from './TaskListStyled';
import { Box } from 'components/Box';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <Box as="ul" display="grid" gridGap="8px" borderRadius="3px">
      {tasks.map(({ id, text }) => (
        <Item key={id}>
          <Task id={id} text={text} />
        </Item>
      ))}
    </Box>
  );
};
