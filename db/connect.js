const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect(
        `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, 
        {
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD,
            authSource: 'admin',
        }
    )
}

module.exports = connectDB