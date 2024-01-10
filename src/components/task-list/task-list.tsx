import { ChangeEvent } from 'react';

import { TaskItem } from '../task-item/task-item';

type Props = {
  items: { title: string; id: string; }[];
}

const TaskList = ({ items }: Props): JSX.Element => {
  const hasItems = items.length !== 0;

  const handleChange = (e: ChangeEvent) => {
    console.log(e);
  };

  return (
    <>
      <ul className="task-list">
        {items.map(({ id, title }) => {
          return <TaskItem key={id} title={title} onChange={handleChange} />
        })}
      </ul>
      {!hasItems && <p className="task-list__placeholder">No Tasks</p>}
    </>
  );
};

export { TaskList };
