const mongoose = require('mongoose');
// const logger = require('../logger/api.logger');

const connectDB = () => {

    const url = "mongodb+srv://gauravsingh264209:k3XZZVsnSoZwWFpJ@cluster0.rqa17k9.mongodb.net/smartParking";

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    mongoose.connection.once("open", async () => {
        console.log("Connected to database");
    });
      
    mongoose.connection.on("error", (err) => {
        console.log("Error connecting to database  ", err);
    });
}

module.exports = {
    connectDB
}