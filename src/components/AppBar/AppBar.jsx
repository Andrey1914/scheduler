import { Box } from 'components/Box';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Title } from './AppBarStyled';

export const AppBar = () => {
  return (
    <Box as="header" display="flex" justifyContent="space-between">
      <Box as="section" display="grid" gridGap="4px">
        <Title>Tasks</Title>
        <TaskCounter />
      </Box>
      <Box as="section" display="grid" gridGap="4px">
        <Title>Filter by status</Title>
        <StatusFilter />
      </Box>
    </Box>
  );
};
