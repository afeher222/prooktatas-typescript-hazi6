export type Task = string;

export type TaskWithDate = {message: string, dueDate: Date};

export type TodoType = Task | TaskWithDate;
