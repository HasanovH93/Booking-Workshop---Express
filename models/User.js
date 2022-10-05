const {Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {type:String, required:true, minlength:3},
    hashedPassword: {type: String, required: true},
    roles: {type:String , enum: ['user',['admin']]}
})