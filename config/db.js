const mongoose = require("mongoose");
require('dotenv').config();

mongoose.set('strictQuery', true);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

const connection = mongoose.connect(process.env.mongoURL)

module.exports = {
    connection
};
