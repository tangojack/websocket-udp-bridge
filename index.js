const maxApi = require('max-api');
const WebSocket = require('ws');
const ws = new WebSocket('wss://5f7a-182-239-87-197.ngrok-free.app:443');

ws.on('message', (message) => {
    maxApi.outlet(parseFloat(message))
});