import Router from 'express'
import { AuthRouter } from '../modules/Auth/router';
import { TodoRouter } from '../modules/Todo/router';
import { corsSettings } from './corsSettings';

const router = Router();

router.use(corsSettings);

TodoRouter(router);
AuthRouter(router);

router.options('*', corsSettings);

export default router;