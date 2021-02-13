import * as express from 'express';
import System from '../../System/model/System';
import Todo from '../model/Todo';
import { IDataTodo } from '../type';

export const postData = async (req:express.Request,res:express.Response) => {
    try{
        const data = <IDataTodo> req.body;
        const todo = await Todo.findOne({title: data.title});
        const balanceBase = await Todo.findOne({$query:{}},{balance:1,_id:0}).sort({_id:-1});
        const balance = balanceBase?.get('balance');
        
        const date = new Date();
        const localDate = date.toLocaleDateString();

        if(todo) return res.status(400).json({message: "todo alredy exsist"});

        const newTodo = new Todo({...data,date:localDate,balance: balance? (balance + data.count) : (data.count)});
        newTodo.save();

        return res.status(201).json({message: "todo created"});
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: 'Bad request'});
    }
}