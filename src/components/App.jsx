import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';

export const App = () => {
  return (
    <Layout>
      <Global styles={GlobalStyles} />
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
