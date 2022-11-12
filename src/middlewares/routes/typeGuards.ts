import { Router } from 'express';

export const isRouter = (module: unknown): module is Router => {
    return Object.getPrototypeOf(module) === Router;
};
