const facilityController = require('express').Router();

facilityController.get('/create', async (req, res) => {
    //show creation form
    res.render('createFacility', {
        title: "Create new facility"
    });
});

facilityController.post('/create', async (req ,res) => {
    console.log(req.body);

    res.redirect('/facility/create')
    //take data from body
    //create model instance profit
})

module.exports = facilityController;