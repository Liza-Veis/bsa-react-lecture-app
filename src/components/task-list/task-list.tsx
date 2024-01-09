import { ChangeEvent } from 'react';

const items = [
  {
    id: 1,
    title: 'Finish with the project',
  },
  {
    id: 2,
    title: 'Buy groceries',
  },
  {
    id: 3,
    title: 'Prepare for the exam',
  },
];

const TaskList = (): JSX.Element => {
  const hasItems = items.length !== 0;

  const handleChange = (e: ChangeEvent) => {
    console.log(e);
  };

  return (
    <>
      <ul className="task-list">
        {items.map(({ id, title }) => {
          return (
            <li key={id} className="task-item">
              <label className="task-item__label">
                <input
                  type="checkbox"
                  className="task-item__input"
                  onChange={handleChange}
                />
                {title}
              </label>
            </li>
          );
        })}
      </ul>
      {!hasItems && <p className="task-list__placeholder">No Tasks</p>}
    </>
  );
};

export { TaskList };
