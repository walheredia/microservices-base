import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config()
import applyMiddlewares from './middlewares';
const app = express();

// Middlewares
applyMiddlewares(app);

export default app;
