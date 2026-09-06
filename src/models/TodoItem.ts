import { Task, TaskWithDate, TodoType } from "../utils/TodoType";

export class TodoItem<T extends TodoType> {
    constructor(private _id: number, private _content: T) {}

    public get id() : number {
        return this._id;
    }

    public get content(): T {
        return this._content;
    }

    public toString() : string {
        if (this.isTaskWithDate()){
            //TaskWithDate
            return `${this.id}\t${this.content.message}\t${this._content.dueDate.toLocaleString()}`;
        } else {
            //normal Task
            return `${this.id}\t${this.content}`;
        }
    }

    public isTaskWithDate() : this is TodoItem<TaskWithDate> {
        if (typeof this.content === "object" && this.content != null && "dueDate" in this.content){
            return true;
        }
        return false;
    }

}