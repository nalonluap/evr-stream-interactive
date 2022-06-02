const { Router } = require('express');
const router = Router();
const path = require('path');


router.get('/', async (req, res) => {

    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});




module.exports = router;
