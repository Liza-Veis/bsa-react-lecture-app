import { useEffect, useState } from 'react';

import { Task } from '../../common/types/types';
import { AppPath, StorageKey } from '../../common/enums/enums';
import { TaskList } from '../task-list/task-list';
import { TaskPreview } from '../task-preview/task-preview';
import { NotFound } from '../not-found/not-found';
import { RouterProvider } from '../common/router-provider/router-provider';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem(StorageKey.TASKS);

    setTasks(savedTasks ? JSON.parse(savedTasks) : []);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(StorageKey.TASKS, JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const handleTaskAdd = (name: string) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: name,
        isCompleted: false,
      },
    ]);
  };

  const handleTaskToggle = (id: string, isCompleted: boolean) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted };
      }

      return task;
    });

    setTasks(updatedTasks);
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
