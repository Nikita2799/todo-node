import * as express from 'express';
import mongoose from 'mongoose';
import Todo from '../model/Todo';
import { sortArray } from '../service/sortArray';

export const getData = async (req:express.Request,res:express.Response) => {
    try{
        const todos:mongoose.Document<typeof Todo>[] = await Todo.find({});

        if(!todos) return res.status(204).json({message: "no content"});

        const sortTodos:mongoose.Document<typeof Todo>[] = await sortArray(todos);
        
        return res.status(200).json(sortTodos);
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: 'Bad request'});
    }
}