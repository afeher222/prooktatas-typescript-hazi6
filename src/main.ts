import { TodoItem } from "./models/TodoItem";
import { Task, TaskWithDate } from "./utils/TodoType";

let todo1 = new TodoItem<Task>(1, "bevásárlás");
let todo2 = new TodoItem<TaskWithDate>(2, {message: "házi feladat", 
    dueDate: new Date("2026-09-06 23:00")});
let todo3 = new TodoItem<Task>(3, "takarítás");
let todo4 = new TodoItem<TaskWithDate>(4, {message: "vonatjegy", 
    dueDate: new Date("2026-09-13 8:00")});
let todo5 = new TodoItem<Task>(5, "főzés");

let todos = [todo1, todo2, todo3, todo4, todo5]

for (let todo of todos){
    console.log(todo.toString());
}


