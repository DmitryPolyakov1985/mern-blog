const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.ATLAS_URI;

mongoose.connect(
    uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err, data) => {
        if (err) return console.log(`DB connection failed`);
        console.log("DB connected");
    }
);

module.exports = mongoose;