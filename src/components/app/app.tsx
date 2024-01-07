import { TaskList } from '../task-list/task-list';

const App = (): JSX.Element => {
  return (
    <main>
      <h1>Todo List</h1>
      <TaskList />
    </main>
  );
};

export { App };
