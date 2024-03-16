import {
    parentPort,
    threadId
} from "worker_threads";

parentPort.addListener(('message'), (message) => {
    for (let i = 1; i <= message; i++) {
        console.log(`Thread : ${threadId} send message ${i}`);
        parentPort.postMessage(i);
    }
    parentPort.close();
})