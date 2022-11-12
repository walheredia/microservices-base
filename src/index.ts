import http from 'http';
import app from './app';
import { connectToMongoDB } from './database';

interface AddressInfo {
    address: string;
    family: string;
    port: number;
}

void (async () => {

    const MONGO_DB_URI_READ = process.env.MONGO_DB_URI_READ || '';
    await connectToMongoDB(MONGO_DB_URI_READ);

    const server = http.createServer(app);
    
    const APP_PORT = process.env.APP_PORT;
    const NODE_ENV = process.env.NODE_ENV;

    server.listen(APP_PORT, () => {
        const { port } = <AddressInfo>server.address();
        console.log(`Started at port ${port} in ${NODE_ENV} environment...`)
    });
})();
