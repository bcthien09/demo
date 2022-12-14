const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        return res.json({message: 'ok'});
    } catch (err) {
        console.error(`Error while loading list`, err.message);
        next(err);
    }
});

module.exports = router;
