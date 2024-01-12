import { useEffect, useState } from 'react';

import { Task } from '../../common/types/types';
import { AppPath, StorageKey } from '../../common/enums/enums';
import { TodoList } from '../todo-list/todo-list';
import { TodoPreview } from '../todo-preview/todo-preview'
import { NotFound } from '../not-found/not-found';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { pathname } = window.location;

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

  const getScreen = (path: string) => {
    const id = path.split('/').pop() as string;

    switch (path) {
      case AppPath.ROOT: {
        return (
          <TodoList tasks={tasks} onTaskAdd={handleTaskAdd} onTaskToggle={handleTaskToggle} />
        );
      }
      case `${AppPath.TASKS}/${id}`: {
        return (
          <TodoPreview id={id} tasks={tasks} onTaskToggle={handleTaskToggle} />
        );
      }
      default: {
        return <NotFound />;
      }
    }
  };

  return (
    <main>
      <h1 className="header">Todo List</h1>
      {getScreen(pathname)}
    </main>
  );
};

export { App };
