import { AppPath } from '../../common/enums/enums';
import { TaskList } from '../task-list/task-list';
import { TaskPreview } from '../task-preview/task-preview';
import { NotFound } from '../not-found/not-found';
import { RouterProvider } from '../common/common';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { tasksActions } from '../../store/actions';

const App = (): JSX.Element => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const handleTaskAdd = (name: string) => {
    dispatch(tasksActions.addTask(name));
  };

  const handleTaskToggle = (id: string, isCompleted: boolean) => {
    dispatch(tasksActions.toggleTask({ id, isCompleted }));
  };

  return (
    <main>
      <h1 className="header">Todo List</h1>
      <RouterProvider
        routes={[
          {
            path: AppPath.ROOT,
            children: [
              {
                path: AppPath.ROOT,
                element: (
                  <TaskList
                    tasks={tasks}
                    onTaskAdd={handleTaskAdd}
                    onTaskToggle={handleTaskToggle}
                  />
                ),
              },
              {
                path: AppPath.ROOT,
                element: (
                  <TaskList
                    tasks={tasks}
                    onTaskAdd={handleTaskAdd}
                    onTaskToggle={handleTaskToggle}
                  />
                ),
              },
              {
                path: AppPath.TASKS_$ID,
                element: (
                  <TaskPreview tasks={tasks} onTaskToggle={handleTaskToggle} />
                ),
              },
              { path: AppPath.ANY, element: <NotFound /> },
            ],
          },
        ]}
      />
    </main>
  );
};

export { App };
