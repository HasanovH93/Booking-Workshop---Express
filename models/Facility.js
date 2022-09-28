const { Schema , model, Types: { ObjectId } } = require('mongoose');

const facilitySchema = new Schema({
    label: { type: String, required: true},
    iconUrl: {type: String },
    rooms: { type: [ObjectId], def: [], ref: 'Room' }

});

const Facility = model('Facility', facilitySchema);

module.exports = Facility;