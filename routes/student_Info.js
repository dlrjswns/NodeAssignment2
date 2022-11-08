const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.locals.title = 'Info-ID';
    res.locals.message = req.params.id;
    res.render("info");
});

module.exports = router;