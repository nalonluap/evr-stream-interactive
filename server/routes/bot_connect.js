const bot = require('../modules/bot');
const { Router } = require('express');
const uuid = require('uuid').v4();

const router = Router();

//In the request( in query ) we send name of the channel to which bot should connect
router.post('/join', async (req, res) => {

    const name = req.body.channelName;

    try {
        await bot.join(channelName);

        res.status(200).json({ message: "Connect", gameId: uuid });
    } catch (err) {
        console.error(`Error to join ${name}, ${err.message}`);
        res.status(500).send("Some error");
    }
});

//In the request( in query ) we send name of the channel to which bot should disconnect
router.post('/close', async (req, res) => {

    const name = req.body.channelName;

    try {
        await bot.part(name);

        res.status(200).json({ message: "Disconnect" });
    } catch (err) {
        console.error(`Error to close ${name}, ${err.message}`);
        res.status(500).send("Some error");
    }

});


module.exports = router;