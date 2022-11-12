import { Application, json } from 'express';
import routesMiddleware from './routes';
import errorMiddleware from './error';
import notFoundMiddleware from './notFound';

export default (app: Application): void => {
    app.use(routesMiddleware);
    app.use(notFoundMiddleware);
    app.use(errorMiddleware);
};