import Express from 'express';
import { config } from './config/config';
import mongoose from 'mongoose';

export const start = async (app:Express.Express)=>{
    try {                
        await mongoose.connect(`${config.db.URL}`,{
            useNewUrlParser: true,
            useFindAndModify: false,
        });

        app.listen(config.server.PORT,()=>{
            console.log(`server started on ${config.server.HOST}:${config.server.PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
}