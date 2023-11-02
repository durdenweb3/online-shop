require('dotenv').config();
const express = require('express');
const authRouter = require('./authRouter.js')
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();