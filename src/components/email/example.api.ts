import { Router } from 'express';
import { handlerGetEmailExample } from './example.handlers';

const router = Router();

router.get('/:exampleParam/:otherParam', handlerGetEmailExample);

export default router;