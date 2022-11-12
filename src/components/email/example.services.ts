import * as emailDal from '../../dal/email';
import { GetExamplePayload } from './example.types';

export const getExampleService = async(param: GetExamplePayload): Promise<Number> => {
    return await emailDal.getExample(param);
}