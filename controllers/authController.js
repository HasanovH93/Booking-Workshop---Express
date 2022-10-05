const jwt = require('jsonwebtoken')
const authController  = require('express').Router()

const jwtSecret = 'qpwkjadfdsfdsf'
authController.get('/obtain', (req, res) => {
    const payload = {
        username: 'Hasan',
        roles: ['user']

    };
    const token = jwt.sign(payload, jwtSecret);
    res.cookie('jwt', token)
     res.send("Here is your token")
})

authController.get('/validate', (req,res) => {
    const token  = req.cookies.jwt;
    if(token){
        const data = jwt.verify(token,jwtSecret)
        console.log(data)
        res.json(data)
    }else {
        res.send('Missing token')
    }
})

module.exports = authController;