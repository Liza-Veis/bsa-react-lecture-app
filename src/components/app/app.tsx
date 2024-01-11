import { useState } from 'react';

import { AddTaskForm } from '../add-task-form/add-task-form';
import { TaskList } from '../task-list/task-list';
import { Task } from '../../common/types/types';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (name: string) => {
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
      <AddTaskForm onSubmit={addTask} />
      <TaskList items={tasks} onTaskToggle={handleTaskToggle} />
    </main>
  );
};

export { App };
