const { Schema, model } = require("mongoose");

// const roleSchema = new Schema({
//   value: { type: String, enum: ["user", "admin"] },
// });

const userSchema = new Schema({
  username: { type: String, required: true, minlength: 3 },
  hashedPassword: { type: String, required: true },
  roles: { type: [{type: String, enum: ['user','admin']}], default: ["user"] },
});

userSchema.index(
  { username: 3 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
