import mongoose from "mongoose";
import Todo from "../model/Todo";

export const sortArray = async (todos:mongoose.Document<any>[]) => {
    let sortTodos:mongoose.Document<typeof Todo>[] = [];

    for(let i = todos.length-1;i>0;i--){
        sortTodos.push(todos[i]);
    };
    
    return sortTodos;
}