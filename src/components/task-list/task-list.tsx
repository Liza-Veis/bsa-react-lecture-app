import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { tasksActions } from '../../store/actions';
import { TaskItem } from '../common/task-item/task-item';
import { AddTaskForm } from './components/components';
import { DataStatus } from '../../common/enums/enums';

const TaskList = (): JSX.Element => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const status = useAppSelector((state) => state.tasks.status);
  const dispatch = useAppDispatch();

  const hasItems = tasks.length !== 0;

  useEffect(() => {
    dispatch(tasksActions.loadTasks());
  }, []);

  const handleTaskAdd = (name: string) => {
    dispatch(tasksActions.createTask(name));
  };

  const handleTaskToggle = (id: string, isCompleted: boolean) => {
    dispatch(tasksActions.updateTask({ id, isCompleted }));
  };

  if (status === DataStatus.PENDING) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <AddTaskForm onSubmit={handleTaskAdd} />
      <ul className="task-list">
        {tasks.map(({ id, title, isCompleted }) => {
          return (
            <TaskItem
              key={id}
              id={id}
              title={title}
              isCompleted={isCompleted}
              isViewTaskShown={true}
              onToggle={handleTaskToggle}
            />
          );
        })}
      </ul>
      {!hasItems && <p className="task-list__placeholder">No Tasks</p>}
    </>
  );
};

export { TaskList };
