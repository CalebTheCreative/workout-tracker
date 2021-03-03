// ===========================================================
// Dependencies
// ===========================================================
const express = require("express");
const logger = require("morgan");
var Promise = require("bluebird");
const mongoose = require("mongoose");
Promise.promisifyAll(mongoose);


const PORT = process.env.PORT || 3000

// ===========================================================
// Express server setup
// ===========================================================
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// ===========================================================
// MongoDB Server Connect
// ===========================================================
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout_db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

// ===========================================================
// Routes
// ===========================================================
const db = require("./models");

app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});