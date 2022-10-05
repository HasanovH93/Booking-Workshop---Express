const authController  = require('express').Router()

authController.get('/obtain', (req, res) => {
     res.send("Here is your token")
})

authController.get('/validate', (req,res) => {
   res.send('Token validated')
})

module.exports = authController;