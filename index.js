const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors = require("cors");


dotenv.config();


mongoose.connect('mongodb+srv://purbo:purbo@cluster0.qgh5q.mongodb.net/?retryWrites=true&w=majority', { ssl: true, sslValidate: false })
    .then((result) => console.log('connection establisted with db'))
    .catch((err) => console.log(err));


app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

