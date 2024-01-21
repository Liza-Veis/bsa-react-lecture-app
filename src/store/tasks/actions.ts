import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Task, AsyncThunkConfig } from '../../common/types/types';
import { name } from './slice';

type UpdateTaskActionPayload = {
  id: string;
  isCompleted: boolean;
};

const loadTasks = createAsyncThunk<Task[], void, AsyncThunkConfig>(
  `${name}/load-tasks`,
  async (_payload, { extra }) => {
    const { tasksService } = extra;

    const tasks = await tasksService.getAll();

    return tasks;
  },
);

const loadTask = createAsyncThunk<Task, string, AsyncThunkConfig>(
  `${name}/load-task`,
  async (payload, { extra }) => {
    const { tasksService } = extra;

    const task = await tasksService.getById(payload);

    return task;
  },
);

const createTask = createAsyncThunk<Task, string, AsyncThunkConfig>(
  `${name}/create-task`,
  async (payload, { extra }) => {
    const { tasksService } = extra;

    const task = await tasksService.create({
      id: crypto.randomUUID(),
      title: payload,
      isCompleted: false,
    });

    return task;
  },
);

const updateTask = createAsyncThunk<
  Task,
  UpdateTaskActionPayload,
  AsyncThunkConfig
>(`${name}/update-task`, async (payload, { extra }) => {
  const { tasksService } = extra;

  const task = await tasksService.update(payload);

  return task;
});

export { loadTasks, loadTask, createTask, updateTask };
