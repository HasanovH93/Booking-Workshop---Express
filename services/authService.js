const jwt = require("jsonwebtoken");


async function login(username, password) {
 return new Promise((res, rej) => {
    if (username.toLowerCase() == "hasan" && password == "123456") {
      res({
        _id: "123010cc2023312efc",
        username: "Hasan",
        roles: ["user"],
      });
    }else {
        rej(new Error('Incorrect username or password'))
    }
  });
}

module.exports = {
  login,
};
