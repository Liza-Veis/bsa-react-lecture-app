import { Task } from '../../common/types/types';
import { TaskItem } from '../common/task-item/task-item';
import { AddTaskForm } from './components/components';

type Props = {
  tasks: Task[];
  onTaskAdd: (name: string) => void;
  onTaskToggle: (id: string, isCompleted: boolean) => void;
};

const TaskList = ({ tasks, onTaskAdd, onTaskToggle }: Props): JSX.Element => {
  const hasItems = tasks.length !== 0;

  return (
    <>
      <AddTaskForm onSubmit={onTaskAdd} />
      <ul className="task-list">
        {tasks.map(({ id, title, isCompleted }) => {
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
