import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectAllTasks } from 'redux/tasks/selectors';
import { Item } from './TaskListStyled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../GlobalStyles';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <Container maxWidth="xs">
      <Global styles={GlobalStyles} />
      <Box
        sx={{
          marginY: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box as="ul" display="grid" gap="12px">
          {tasks.map(({ id, text }) => (
            <Item component="li" key={id} elevation={3}>
              <Task id={id} text={text} />
            </Item>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
