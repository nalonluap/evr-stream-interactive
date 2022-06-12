const { Router } = require('express');
const path = require('path');
const log = require('../modules/logger');

const router = Router();



router.get('/ping', async (req, res) => {

    try {
        res.status(200).send("pong");
    } catch (e) {

        log.error('Error in /api/ping', e.message);
        res.status(500).send("Failed to get ping-pong");
    }
});




module.exports = router;
