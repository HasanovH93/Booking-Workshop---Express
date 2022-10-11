const { Schema , model, Types: { ObjectId } } = require('mongoose');

const facilitySchema = new Schema({
    label: { type: String, required: true},
    iconUrl: {type: String, minlength: [1, 'Icon URL should be at least 1 character'] },
    rooms: { type: [ObjectId], def: [], ref: 'Room' }

});

const Facility = model('Facility', facilitySchema);

module.exports = Facility;