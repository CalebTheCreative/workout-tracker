// ===========================================================
// Dependencies
// ===========================================================
const router = require("express").Router();
const Workout = require("../models/workout.js");

// ===========================================================
// API Routes
// ===========================================================
    
// Show last workout
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

// Update a workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne(
        { _id: req.params.id },
        { $push: { workouts: req.body}}
    ).then (dbWorkout => {
        res.json(dbWorkout);
    }).catch (error => {
        res.json(error);
    });
});

// View several workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ _id: -1 })
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }).catch(error => {
            res.json(error);
        });
});

// ===========================================================
// Export
// ===========================================================
module.exports = router;