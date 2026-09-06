import { TodoItem } from "../models/TodoItem";
import { TodoType } from "../utils/TodoType";

export class TodoList<T extends TodoType>{
    private items: Map<number, TodoItem<T>> = new Map();

    @LogMethod("Add metódus felhívva")
    public addItem(item: TodoItem<T>) : void {
        this.items.set(item.id, item);
        console.log(`Todo hozzáadva: ${item.id}`);
    }

    @LogMethod("Delete metódus felhívva")
    public deleteItemById(id: number) : void {
        if (this.items.has(id)){
            console.log(`Todo törölve: ID=${id}`);
            this.items.delete(id);            
        }
    }

    public listItems() : void {
        console.log("---------------");
        for (let item of this.items.values()){
            console.log(item.toString());
        }
        console.log("---------------\n");     
    }


    public listItemsWithDate(hasDate : boolean){
        let filteredTodos = this.items.values().filter(content => hasDate 
            ? content.isTaskWithDate() : !content.isTaskWithDate())
        console.log("---------------");        
        for (let item of filteredTodos){
            console.log(item.toString());
        }
        console.log("---------------\n");     
    }        
    
}

/*
function Logger(text: string) {    
    function wrapper(target: any, context: ClassMethodDecoratorContext) {
        function decorator(this: any, ...args: any[]){
            console.log(text);
            return target.apply(this, args);
        }
        return decorator;
    };
    return wrapper;
}
*/

function LogMethod(text: string){
    return function (target: any, propertyName: string, propertyDesciptor: PropertyDescriptor) {
        const originalMethod = propertyDesciptor.value;
        propertyDesciptor.value = function (...args: any[]) {            
            console.log(text, JSON.stringify(args));
            return originalMethod.apply(this, args);
        };
    }
}