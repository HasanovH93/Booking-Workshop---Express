const { createFacility, getAllFacilities } = require('../services/facilityService');
const { getById } = require('../services/roomService');

const facilityController = require('express').Router();

facilityController.get('/create', async (req, res) => {
    //show creation form
    res.render('createFacility', {
        title: "Create new facility"
    });
});

facilityController.post('/create', async (req ,res) => {
    try {
        await createFacility(req.body.label, req.body.iconUrl);
        res.redirect('/catalog')
        
    } catch (error) {
        // TODO render Errors
        res.render('createFacility', {
            title: "Create new facility"
        })
    }
facilityController.get('/:roomId/decorateRoom', async (req,res) => {
    const roomId = req.params.roomId;
    const room = await getById(roomId);
    const facilities = await getAllFacilities();

    res.render('decorate', {
        title: 'Add Facility',
        room,
        facilities
    });

});

})

module.exports = facilityController;