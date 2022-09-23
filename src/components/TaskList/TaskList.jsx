import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { getTasks, getStatusFilter } from 'redux/selectors';
import { statusFilters } from 'redux/constants';
import { Item } from './TaskListStyled';
import { Box } from 'components/Box';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <Box as="ul" display="grid" gridGap="8px" borderRadius="3px">
      {visibleTasks.map(task => (
        <Item key={task.id}>
          <Task task={task} />
        </Item>
      ))}
    </Box>
  );
};
