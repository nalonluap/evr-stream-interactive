const bot = require('../modules/bot');
const { Router } = require('express');
const router = Router();

//In the request( in query ) we send name of the channel to which bot should connect
router.post('/join', async (req, res) => {

    const name = req.query.name;

    try {
        bot.join(name);

        res.status(200).send("Connect");
    } catch (err) {
        console.error(`Error to join ${name}, ${err.message}`);
        res.status(500).send("Some error")
    }
})

//In the request( in query ) we send name of the channel to which bot should disconnect
router.post('/close', async (req, res) => {

    const name = req.query.name;

    try {
        bot.part(name);

        res.status(200).send("Disconnect");
    } catch (err) {
        console.error(`Error to close ${name}, ${err.message}`);
        res.status(500).send("Some error")
    }

})


module.exports = router;