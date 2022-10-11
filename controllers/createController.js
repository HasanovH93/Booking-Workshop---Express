const { create } = require('../services/roomService');

const router = require('express').Router();
const { hasRole } = require("../middlewares/guards");
const { parseError } = require('../utils/parser');


router.get('/', (req, res) => {
    res.render('create', {
        title: 'Host New Accomodation'
    });
});

router.post('/', hasRole('user'), async  (req, res) => {
    try {
        const result = await create(req.body, req.user._id);
        res.redirect('/catalog/' + result._id);
    } catch(error) {
        res.render('create', {
            title: 'Request Error',
            body: req.body,
            error:parseError(error)
        });
    }
});

module.exports = router;