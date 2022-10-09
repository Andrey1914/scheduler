import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskList } from 'components/TaskList/TaskList';
import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchTasks } from 'redux/tasks/operations';
import { selectLoading } from 'redux/tasks/selectors';
import { Image } from './HomeStyled';
import background from '../../components/images/bg-image.jpg';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Image style={{ backgroundImage: `url(${background})` }}>
        <TaskEditor />
        <div>{isLoading && 'Request in progress...'}</div>
        <TaskList />
      </Image>
    </>
  );
}
