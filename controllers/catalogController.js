const router = require("express").Router();

router.get('/', (req,res) => {
    res.render('catalog', {
        title : "All accommodation"
    })
});

router.get('/:id', (req, res) => {
    res.render('details', {
        title: "Accomodation Details"
    })
})

module.exports = router