import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Зроби, будь ласка, замітку');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="text" />
      <button type="submit">Add todo</button>
    </form>
  );
};
