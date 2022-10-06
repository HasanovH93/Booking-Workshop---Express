const facilityController = require("express").Router();

const { createFacility, getAllFacilities, addFacilities } = require("../services/facilityService");
const { getById } = require("../services/roomService");


facilityController.get("/create", async (req, res) => {
  //show creation form
  res.render("createFacility", {
    title: "Create new facility",
  });
});

facilityController.post("/create", async (req, res) => {
  try {
    await createFacility(req.body.label, req.body.iconUrl);
    res.redirect("/catalog");
  } catch (error) {
    res.render("createFacility", {
      title: "Create new facility",
    });
  }
});

facilityController.get("/:roomId/decorateRoom", async (req, res) => {
  const roomId = req.params.roomId;
  const room = await getById(roomId);

  if(!req.user || req.user._id != room.owner){
    return res.redirect('/auth/login')
  }

  const facilities = await getAllFacilities();
  facilities.forEach(f => {
    if((room.facilities || []).some(id => id.toString() == f._id.toString())){
        f.checked = true
    }
  });

  res.render("decorate", {
    title: "Add Facility",
    room,
    facilities,
  });
});

facilityController.post("/:roomId/decorateRoom", async (req, res) => {
    await addFacilities(req.params.roomId, Object.keys(req.body));
    
    res.redirect('/catalog/' + req.params.roomId);
});

module.exports = facilityController;
