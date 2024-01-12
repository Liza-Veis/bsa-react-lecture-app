import { Link, useParams } from 'react-router-dom';

import { Task } from '../../common/types/types';
import { TaskItem } from '../common/task-item/task-item';

type Props = {
  tasks: Task[];
  onTaskToggle: (id: string, isCompleted: boolean) => void;
};

// useParams
// useNavigation
// useMatch
// useLocation

const TodoPreview = ({ tasks, onTaskToggle }: Props): JSX.Element => {
  const { id } = useParams();

  const task = tasks.find((task) => task.id === id);

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
        onToggle={onTaskToggle}
      />
      <Link className="back-link" to="/">
        Back
      </Link>
    </>
  );
};

export { TodoPreview };
