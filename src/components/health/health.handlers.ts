import { NextFunction, Request, Response, Router } from 'express';
import { getHealthStatus } from './health.services';

const router = Router();

export const handlerHealthCheck = (req: Request, res: Response, next: NextFunction): Response => {
    try {
        const healthStatus = getHealthStatus();
        return res.status(healthStatus.status).json();
    } catch (err) {
        const error = err as Error;
        throw new Error(error.message);
    }
};

export default router;