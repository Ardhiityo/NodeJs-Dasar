import https from 'https';

const endpoint = 'https://eoi8gdbjuyv4h3a.m.pipedream.net';

const request = https.request(endpoint, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}, (response) => {
    response.addListener('data', (data) => {
        console.log(`Receive data ${data.toString()}`);
    })
})

const body = JSON.stringify({
    firstName: 'Eko',
    lastName: 'Khannedy'
})

request.write(body);
request.end();