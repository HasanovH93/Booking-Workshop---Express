const Room = require('../models/Room')


function getAll(search, city, fromPrice, toPrice) {
  return Room.find({}).lean();
}

function getById(id) {
    return Room.findById(id).lean()
}

// async function create(roomData) {
//     const room = {
//         id: getId(),
//         name: roomData.name,
//         description: roomData.description,
//         city: roomData.city,
//         beds: Number(roomData.beds),
//         price: Number(roomData.price),
//         imgUrl: roomData.imgUrl
//     };

//     const missing = Object.entries(room).filter(([k, v]) => !v);
//     if (missing.length > 0) {
//         throw new Error(missing.map(m => `${m[0]} is required!`).join('\n'));
//     }

//     data.push(room);
//     await persist();

//     return room;
// }



module.exports = {
    getAll,
    getById,
};