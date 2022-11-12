import { NextFunction, Request, Response } from 'express';
import { AppError, handleError } from '../../utils/app-error';

export default (err: Error, req: Request, res: Response, next: NextFunction
): void => {
    const message = 'Something went wrong';

    const isOperational = handleError(err as AppError);
    if (!isOperational) {
        next(err);
    } else {
        res.status(422).json(message);
    }
};