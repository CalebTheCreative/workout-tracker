// ===========================================================
// Dependencies
// ===========================================================
const router = require("express").Router();
const Workout = require("../models/workout.js");

// ===========================================================
// API Routes
// ===========================================================
    
// Show last workout(s)
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


// ===========================================================
// Export
// ===========================================================
module.exports = router;