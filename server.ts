import bodyParser from 'body-parser';
import express from 'express';
import router from './src/mainRoutes/routers';
import { start } from './start';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',router);

start(app);