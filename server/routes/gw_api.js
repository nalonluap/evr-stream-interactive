const { Router } = require('express');
const path = require('path');
const log = require('../modules/logger');
const words = require('../game/words');

const router = Router();

router.post('/add', async (req, res) => {

    try {
        const data = req.body;

        const id = await words.AddQuery(data);

        res.status(200).json({ message: "Succes", id: id });
    } catch (err) {
        log.error('Failed parse data for add words in route /api/game/words/add : ' + err.message);
        res.status(500).send(err.message);
    }

});

router.get('/getall', async (req, res) => {

    try {
        const querys = await words.GetAllQuery();

        res.status(200).json({ message: "succes", data: querys });
    } catch (err) {
        log.error('Failed get all query data /api/game/words/getall : ' + err.message);
        res.status(500).send(err.message);
    }
});

router.get(`/query/:id`, async (req, res) => {

    const id = req.params.id;

    try {
        const query = await words.GetQueryById(id);

        if (query != null) {
            res.status(200).json({ message: 'succes', data: query });
        } else {
            res.status(404).json({ message: 'failed' });
        }
    } catch (err) {
        log.error(`Failed get query by id /api/game/words/query/${id} : ` + err.message);
        res.status(500).send(err.message);
    }

});

router.delete(`/query/:id`, async (req, res) => {
    const id = req.params.id;

    try {
        const del = await words.DeleteQueryById(id);
        if (del) {
            res.status(200).json({ message: 'succes' });
        } else {
            res.status(404).json({ message: 'failed' });
        }
    } catch (err) {
        log.error(`Failed delete query by id /api/game/words/query/${id} : ` + err.message);
        res.status(500).send(err.message);
    }
})

module.exports = router;