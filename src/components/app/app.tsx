import { AppPath } from '../../common/enums/enums';
import { TaskList } from '../task-list/task-list';
import { TaskPreview } from '../task-preview/task-preview';
import { NotFound } from '../not-found/not-found';
import { RouterProvider } from '../common/common';

const App = (): JSX.Element => {
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
                element: <TaskList />,
              },
              {
                path: AppPath.TASKS_$ID,
                element: <TaskPreview />,
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
