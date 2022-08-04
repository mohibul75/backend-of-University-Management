const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors = require("cors");

const courseRoute = require("./routes/CourcesManagement");
const studentRoute = require("./routes/StudentManagement");

dotenv.config();


mongoose.connect('mongodb+srv://purbo:purbo@cluster0.qgh5q.mongodb.net/?retryWrites=true&w=majority', { ssl: true, sslValidate: false })
    .then((result) => console.log('connection establisted with db'))
    .catch((err) => console.log(err));


app.use(cors());
app.use(express.json());
app.use("/api/course", courseRoute);
app.use("/api/student", studentRoute);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

