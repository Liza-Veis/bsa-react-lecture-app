import { Task } from '../../common/types/types';
import { TaskItem } from '../task-item/task-item';

type Props = {
  id: string;
  tasks: Task[];
  onTaskToggle: (id: string, isCompleted: boolean) => void;
};

const TodoPreview = ({ id, tasks, onTaskToggle }: Props): JSX.Element => {
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return (
      <>
        <h2>Task Not Found</h2>
        <p>Sorry, the task was not found.</p>
        <a className="back-link" href="/">
          Back
        </a>
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
        onToggle={onTaskToggle}
      />
      <a className="back-link" href="/">
        Back
      </a>
    </>
  );
};

export { TodoPreview };
