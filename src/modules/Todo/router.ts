import * as express from 'express';
import { getData } from './controllers/getData';
import { postData } from './controllers/postData';

export const TodoRouter = (router:express.IRouter) => {
    router.get('/todo/get_data',getData);
    router.post('/todo/post_data',postData);
} 