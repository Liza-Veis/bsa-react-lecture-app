import { ChangeEvent, FormEvent, useState } from 'react';

type Props = {
  onSubmit: (name: string) => void;
};

const AddTaskForm = ({ onSubmit }: Props): JSX.Element => {
  const [name, setName] = useState('');

  const handleNameChange = (_event: ChangeEvent<HTMLInputElement>) => {
    setName(_event.target.value);
  };

  const handleSubmit = (_event: FormEvent) => {
    _event.preventDefault();

    if (name.trim() === '') {
      return;
    }

    onSubmit(name);
    setName('');
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <label className="add-task__label">
        Name
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="add-task__input"
        />
      </label>
      <button className="add-task__button">Add Task</button>
    </form>
  );
};

export { AddTaskForm };
