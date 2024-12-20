import { Request, Response } from 'express';
import { ICreateTaskBody, ITaskResponse, ITask } from '../types/task';
import Task from '../models/Task';

export async function createTask(
  req: Request<{}, {}, ICreateTaskBody> & { user?: string },
  res: Response<ITaskResponse>
): Promise<void> {
  try {
    const { title, description, priority } = req.body;
    const userId = req.user;

    if (!title || !description || !userId) {
      res.status(400).json({
        success: false,
        message: 'All fileds are requiried',
        data: [],
      });
      return;
    }

    const task: ITask = {
      title,
      description,
      status: 'todo',
      priority,
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newTask = await Task.create(task);

    res
      .status(201)
      .json({ success: true, data: newTask, message: 'Task was created' });
  } catch (error) {
    res.status(500).json({ success: true, data: [], message: 'server error' });
  }
}

export async function getTaskById(
  req: Request,
  res: Response<ITaskResponse>
): Promise<void> {
  try {
    const userId = req.user;
    const tasks = await Task.find({ userId });

    res
      .status(200)
      .json({ success: true, data: tasks, message: 'Tasks was found' });
  } catch (error) {
    res.status(500).json({ success: true, data: [], message: 'server error' });
  }
}
