const TaskList = (): JSX.Element => {
  return (
    <ul className="task-list">
      <li className="task-item">
        <label className="task-item__label">
          <input type="checkbox" className="task-item__input" />
          Finish with the project
        </label>
      </li>
      <li className="task-item">
        <label className="task-item__label">
          <input type="checkbox" className="task-item__input" />
          Buy Groceries
        </label>
      </li>
      <li className="task-item">
        <label className="task-item__label">
          <input type="checkbox" className="task-item__input" />
          Prepare for the exam
        </label>
      </li>
    </ul>
  );
};

export { TaskList };
