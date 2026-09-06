import { TodoItem } from "./models/TodoItem";
import { TodoList } from "./services/TodoList";
import { Task, TaskWithDate, TodoType } from "./utils/TodoType";

let todos = [
    new TodoItem<Task>(1, "bevásárlás"),
    new TodoItem<TaskWithDate>(2, {message: "házi feladat", 
        dueDate: new Date("2026-09-06 23:00")}),
    new TodoItem<Task>(3, "takarítás"),
    new TodoItem<TaskWithDate>(4, {message: "vonatjegy", 
        dueDate: new Date("2026-09-13 8:00")}),
    new TodoItem<Task>(5, "főzés"),
]

let myTodos = new TodoList<TodoType>();
for (let todo of todos){
    myTodos.addItem(todo);
}

console.log("\nÖsszes feladat:");
myTodos.listItems();

myTodos.deleteItemById(3);

console.log("\nÖsszes feladat:");
myTodos.listItems();

console.log("\nHatáridős feladatok:");
myTodos.listItemsWithDate(true);

console.log('\nHatáridő nélküli feladatok:');
myTodos.listItemsWithDate(false);
