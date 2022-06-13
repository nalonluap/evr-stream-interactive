const { Router } = require('express');
const path = require('path');
const log = require('../modules/logger');
const Words = require('../game/words');

const router = Router();

router.post('/add', async (req, res) => {

    try {
        const data = req.body;

        const id = await Words.AddQuery(data);

        res.status(200).json({ message: "Succes", id: id });
    } catch (err) {
        log.error('Failed parse data for add words in route /api/game/words/add : ' + err.message);
        res.status(500).json({ message: 'failed' });
    }

});

router.get('/getall', async (req, res) => {

    try {
        const querys = await Words.GetAllQuery();

        res.status(200).json({ message: "succes", data: querys });
    } catch (err) {
        log.error('Failed get all query data /api/game/words/getall : ' + err.message);
        res.status(500).json({ message: 'failed' });
    }
});

router.get(`/query/:id`, async (req, res) => {

    const id = req.params.id;

    try {
        const query = await Words.GetQueryById(id);

        if (query != null) {
            res.status(200).json({ message: 'succes', data: query });
        } else {
            res.status(404).json({ message: 'failed' });
        }
    } catch (err) {
        log.error(`Failed get query by id /api/game/words/query/${id} : ` + err.message);
        res.status(500).json({ message: 'failed' });
    }

});

router.delete(`/query/:id`, async (req, res) => {
    const id = req.params.id;

    try {
        const del = await Words.DeleteQueryById(id);
        if (del) {
            res.status(200).json({ message: 'succes' });
        } else {
            res.status(404).json({ message: 'failed' });
        }
    } catch (err) {
        log.error(`Failed delete query by id /api/game/words/query/${id} : ` + err.message);
        res.status(500).json({ message: 'failed' });
    }
});


router.post(`/start`, async (req, res) => {

    const id = req.body.gameId;

    try {
        const query = await Words.StartGame();

        if (query) {
            res.status(200).json({ message: 'succes', winWords: query });
        } else {
            res.status(501).json({ message: 'failed' });
        }
    } catch (err) {
        log.error(`Failed start game /api/game/words/start`, err.message);
        res.status(500).json({ message: 'failed' });
    }

});

module.exports = router;