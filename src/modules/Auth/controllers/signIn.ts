import * as express from 'express';
import { IAuth } from '../type';

export const signIn = (req:express.Request,res:express.Response) => {
    try{
        const {password} = <IAuth>req.body
        
        if(password==="1224")
            return res.status(200).json({message: 'ok'})
        else
            return res.status(400).json({message: "incorrect data"})    
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: 'Bad request'});
    }
}