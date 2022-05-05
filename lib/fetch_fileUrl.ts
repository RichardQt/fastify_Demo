// const fs = require('fs');
import fs from 'fs'
// const path = require('path');
import path from 'path'
// const nodeFetch = require('node-fetch');
import nodeFetch from 'node-fetch'
const Request = nodeFetch.Request;
const Response = nodeFetch.Response;

const fetch = function (url, options) {
    const request = new Request(url, options);
    if (request.url.substring(0, 5) === 'file:') {
        return new Promise((resolve, reject) => {
            const filePath = path.normalize(url.substring('file:///'.length));
            if (!fs.existsSync(filePath)) {
                reject(`File not found: ${filePath}`);
            }
            const readStream = fs.createReadStream(filePath);
            readStream.on('open', function () {
                resolve(new Response(readStream, {
                    url: request.url,
                    status: 200,
                    statusText: 'OK',
                    size: fs.statSync(filePath).size,
                    timeout: request.timeout
                }));
            });
        });
    } else {
        return nodeFetch(url, options);
    }
};

export default fetch

// module.exports = fetch