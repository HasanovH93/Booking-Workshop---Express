const mongoose = require("mongoose");

const connStr = "mongodb://localhost:27017/su-booking";

module.exports = async (app) => {
    try {
        await mongoose.connect(connStr,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
          });
          console.log('DB connected')
    } catch (err) {
        console.error('Error initlializing database');
        console.error(err.message);
        process.exit(1);
    }

};
