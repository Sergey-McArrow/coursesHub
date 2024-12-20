import { Document } from 'mongoose';
import Task from '../models/Task';
import { ApiResponse } from './common';

export type TaskStatusTypes = 'todo' | 'in-progress' | 'done';
export type TaskPriorityTypes = 'low' | 'medium' | 'high';

export interface ITask {
  title: string;
  description: string;
  status?: TaskStatusTypes;
  priority?: TaskPriorityTypes;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface ICreateTaskBody {
  title: string;
  description: string;
  status?: TaskStatusTypes;
  priority?: TaskPriorityTypes;
}

export interface ITaskResponse extends ApiResponse {
  data: Document<unknown, {}, ITask> | Document<unknown, {}, ITask>[];
}
