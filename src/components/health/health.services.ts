import { GetHealthStatus } from './health.types';

export const getHealthStatus = (): GetHealthStatus => {
    return {
        status: 200,
    };
};