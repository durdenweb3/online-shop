require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

const app = express();
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();