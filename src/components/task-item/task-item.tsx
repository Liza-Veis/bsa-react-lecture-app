import { ChangeEvent } from 'react';

type Props = {
  title: string;
  onChange: (e: ChangeEvent) => void;
};

const TaskItem = ({ title, onChange }: Props): JSX.Element => {
  return (
    <li className="task-item">
      <label className="task-item__label">
        <input
          type="checkbox"
          className="task-item__input"
          onChange={onChange}
        />
        {title}
      </label>
    </li>
  );
};

export { TaskItem };
