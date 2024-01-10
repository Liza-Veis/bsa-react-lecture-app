import { useState } from 'react';
import { AddTaskForm } from '../add-task-form/add-task-form';
import { TaskList } from '../task-list/task-list';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<{ title: string; id: string; }[]>([]);

  const addTask = (name: string) => {
    setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: name,
        },
    ]);
  }

  return (
    <main>
      <h1 className="header">Todo List</h1>
      <AddTaskForm onSubmit={addTask}/>
      <TaskList items={tasks} />
    </main>
  );
};

export { App };
