import * as express from 'express';
import { signIn } from './controllers/signIn';

export const AuthRouter = (router:express.IRouter) => {
    router.post('/auth',signIn);
} 