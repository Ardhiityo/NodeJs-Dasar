import cluster from 'cluster';
import os from 'os';
import process from 'process';
import http, {
    request
} from 'http';

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid}`);
    for (let index = 0; index < os.cpus().length; index++) {
        cluster.fork();
    };
    cluster.addListener('exit', (worker) => {
        console.log(`worker exited: ${worker.id}`);
        cluster.fork();
    });
};

if (cluster.isWorker) {
    const server = http.createServer((request, response) => {
        response.write(`Response from process: ${process.pid}`);
        response.end();
        process.exit();
    });
    server.listen(3000);
    console.log(`Worker ${process.pid}`);
};