const maxApi = require('max-api');
const WebSocket = require('ws');
const ws = new WebSocket('wss://tangosocket.onrender.com:443');

ws.on('message', (message) => {
    maxApi.outlet(parseFloat(message))
});