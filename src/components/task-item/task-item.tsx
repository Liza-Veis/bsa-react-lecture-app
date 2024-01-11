type Props = {
  id: string;
  title: string;
  isCompleted: boolean;
  onToggle: (id: string, isCompleted: boolean) => void;
};

const TaskItem = ({ id, title, isCompleted, onToggle }: Props): JSX.Element => {
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
    </li>
  );
};

export { TaskItem };
