import net from 'net';

const server = net.createServer(function (client) {
    console.log('Connnet to client');
    client.on('data', (data) => {
        console.log(`Receive data from client : ${data.toString()}`);
        client.write(`${data.toString()}\r\n`);
    })
})

server.listen(3000, 'localhost');