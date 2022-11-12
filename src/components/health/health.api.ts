import { Router } from 'express';
import { handlerHealthCheck } from './health.handlers';

const router = Router();

router.get('/', handlerHealthCheck);

export default router;