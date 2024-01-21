import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { TaskItem } from '../common/task-item/task-item';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { tasksActions } from '../../store/actions';

const TaskPreview = (): JSX.Element => {
  const { id } = useParams();

  const task = useAppSelector((state) => state.tasks.currentTask);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(tasksActions.loadTask(id));
    }
  }, [id]);

  const handleTaskToggle = (id: string, isCompleted: boolean) => {
    dispatch(tasksActions.updateTask({ id, isCompleted }));
  };

  if (!task) {
    return (
      <>
        <h2>Task Not Found</h2>
        <p>Sorry, the task was not found.</p>
        <Link className="back-link" to="/">
          Back
        </Link>
      </>
    );
  }

  return (
    <>
      <h2 className="todo-preview__title">Task Preview</h2>
      <p className="todo-preview__id">ID: #{id}</p>
      <TaskItem
        id={task.id}
        title={task.title}
        isCompleted={task.isCompleted}
        onToggle={handleTaskToggle}
      />
      <Link className="back-link" to="/">
        Back
      </Link>
    </>
  );
};

export { TaskPreview };
