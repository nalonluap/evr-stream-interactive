const { Router } = require('express');
const path = require('path');
const log = require('../modules/logger');
const Users = require('../models/Users');
const routes = Router();

routes.get('/getUser', async (req, res) => {

    try {
        const channel = req.body.channel;

        const user = await Users.findAll({
            where: {
                user: channel
            }
        });

        if (user != []) {
            res.status(200).json({ message: 'User was found', found: true });
        } else {
            res.status(200).json({ message: 'User was not found', found: false });
        }

    } catch (err) {
        log.error(`Error during user verification ${err.message} `);
        res.status(500).send({ message: "Some error" });
    }

})


routes.post('/registration', async (req, res) => {

    try {
        const socketID = req.body.socketID;
        const channel = req.body.channel;

        await Users.create({
            user: channel,
            socketID: socketID
        });

        res.status(200).send({ message: 'Succes' });
    } catch (err) {
        log.error(`Failed registaration user ${err.message}`);
        res.status(500).send({ message: "Some error" });
    }

})

routes.put('/update', async (req, res) => {
    try {
        const channel = req.body.channel;
        const socketID = req.body.socketID;

        await Users.update({
            socketID: socketID
        }, {
            where: {
                channel: channel
            }
        });

        res.status(200).send({ message: 'Succes' });
    } catch (err) {
        log.error(`Error update user ${err.message}`);
        res.status(500).send({ message: "Some error" });
    }
})



module.exports = routes;