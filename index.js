const express = require('express');
require('dotenv').config();
const app = express();
const { connectdb } = require('./database');
const { userRoute } = require('./routes');
const cors = require('cors');
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
connectdb();

app.use('/users', userRoute);


app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})