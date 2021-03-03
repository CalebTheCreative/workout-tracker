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
        .catch(error => {
            res.status(400).json(error);
        });
});

// Add a workout
router.post("/api/workouts", (req, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});

// ===========================================================
// Export
// ===========================================================
module.exports = router;