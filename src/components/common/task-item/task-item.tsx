import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  isCompleted: boolean;
  isViewTaskShown?: boolean;
  onToggle: (id: string, isCompleted: boolean) => void;
};

const TaskItem = ({
  id,
  title,
  isCompleted,
  isViewTaskShown = false,
  onToggle,
}: Props): JSX.Element => {
  const handleChange = () => {
    onToggle(id, !isCompleted);
  };

  return (
    <li className="task-item">
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={isCompleted}
          className="task-item__input"
          onChange={handleChange}
        />
        {title}
      </label>
      {isViewTaskShown && (
        <Link to={`tasks/${id}`} className="task-item__view-task-link">View Task</Link>
      )}
    </li>
  );
};

export { TaskItem };
