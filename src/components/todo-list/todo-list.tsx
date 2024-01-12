import { AddTaskForm } from '../common/add-task-form/add-task-form';
import { TaskList } from '../common/task-list/task-list';
import { Task } from '../../common/types/types';

type Props = {
  tasks: Task[];
  onTaskAdd: (name: string) => void;
  onTaskToggle: (id: string, isChecked: boolean) => void;
}

const TodoList = ({ tasks, onTaskAdd, onTaskToggle }: Props): JSX.Element => {
  return (
    <>
      <AddTaskForm onSubmit={onTaskAdd} />
      <TaskList items={tasks} onTaskToggle={onTaskToggle} />
    </>
  );
};

export { TodoList };
