const express = require('express');
const path = require('path');
const log = require('./modules/logger');

const { createServer } = require('http');
const { Server } = require('socket.io');


const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.get('/', async (req, res) => {
//     res.sendFile(path.join(__dirname, 'test', 'index.html'));
// })

app.post('/message', async (req, res) => {
    try {
        let socketID = req.body.socketID;
        let message = req.body.message;
        let username = req.body.username;

        if (socketID) {
            const socket = io.to(socketID);

            if (socket) {
                socket.emit('message', JSON.stringify({ username: username, message: message }));
            }
        }

        res.status(200).send('Succes');
    } catch (err) {
        log.error('Failed push message to socket', err);
    }
})


io.on('connection', (socket) => {

    // socket.emit('connection:sid', socket.id);
    console.log('connection ' + socket.id);



    socket.on('disconnect', () => {
        console.log('disconnection ' + socket.id);
    })

}); // register socket coonetion 

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
    log.info(`Running at port ${PORT}`);
});