import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectAllTasks } from 'redux/tasks/selectors';
import { Item } from './TaskListStyled';
import { Box } from 'components/Box';
import Container from '@mui/material/Container';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../GlobalStyles';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <Container maxWidth="xs">
      <Global styles={GlobalStyles} />
      <Box
        as="ul"
        display="grid"
        gridGap="8px"
        borderRadius="3px"
        listStyle="none"
        m="0"
        p="0"
      >
        {tasks.map(({ id, text }) => (
          <Item key={id}>
            <Task id={id} text={text} />
          </Item>
        ))}
      </Box>
    </Container>
  );
};
