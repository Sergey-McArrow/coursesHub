import { model, Types, Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  userId: Types.ObjectId;
}

const TaskSchema: Schema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Task = model<ITask>("Task", TaskSchema);

export default Task;
