import { Task } from '../../common/types/task.type';
import { TaskItem } from '../task-item/task-item';

type Props = {
  items: Task[];
  onTaskToggle: (id: string, isCompleted: boolean) => void;
};

const TaskList = ({ items, onTaskToggle }: Props): JSX.Element => {
  const hasItems = items.length !== 0;

  return (
    <>
      <ul className="task-list">
        {items.map(({ id, title, isCompleted }) => {
          return (
            <TaskItem
              key={id}
              id={id}
              title={title}
              isCompleted={isCompleted}
              isViewTaskShown={true}
              onToggle={onTaskToggle}
            />
          );
        })}
      </ul>
      {!hasItems && <p className="task-list__placeholder">No Tasks</p>}
    </>
  );
};

export { TaskList };
