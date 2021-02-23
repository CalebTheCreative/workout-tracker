// ===========================================================
// Dependencies
// ===========================================================
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

// ===========================================================
// Express server setup
// ===========================================================
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// ===========================================================
// MongoDB Server Connect
// ===========================================================
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workouts',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// ===========================================================
// Routes
// ===========================================================
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});