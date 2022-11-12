import { default as HealthApi } from './health.api';

export default [
    {
        router: HealthApi,
        routerPrefix: 'health',
    },
];