import express, { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { isRouter } from './typeGuards';

const componentsPath = path.resolve(__dirname, '..', '..', 'components');
/**
 * main routing is handled by this algorithm, we only need to create a folder in "components"
 * and expose in the index the api Router and the prefix
 */

interface componentModule {
    router: Router;
    routerPrefix: string;
}

const mainRouter: Router = fs
    .readdirSync(componentsPath)
    .flatMap((componentName): componentModule => {
        const module = <Record<'default', componentModule>>(
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require(path.resolve(componentsPath, componentName))
        );
        return module.default;
    })
    .filter((module) => isRouter(module.router))
    .reduce((rootRouter, module) => rootRouter.use(`/${module.routerPrefix}`, module.router), express.Router());

export default mainRouter;
