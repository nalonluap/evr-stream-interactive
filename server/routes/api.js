const { Router } = require('express');
const router = Router();
const path = require('path');


router.get('/', async (req, res) => {

    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});




module.exports = router;
