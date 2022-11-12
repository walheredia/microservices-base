import { NextFunction, Request, Response, Router } from 'express';
import { getExampleService } from './example.services';

const router = Router();

export const handlerGetEmailExample = async(req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const { exampleParam, otherParam } = req.params;
        if(!exampleParam)
            return res.status(400).json({success: false, message: 'exampleParam is missing!'});
        if(!otherParam)
            return res.status(400).json({success: false, message: 'otherParam is missing!'});
        const examples = await getExampleService({from: exampleParam, numberOfDaysParam: Number(otherParam)});
        return res.status(200).json({success: true, data: examples});
    } catch (err) {
        const error = err as Error;
        return res.status(500).json({success: false, message: error.message});
    }
};

export default router;