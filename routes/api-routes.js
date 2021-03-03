// ===========================================================
// Dependencies
// ===========================================================
// Express
const router = require("express").Router();
// Models
const db = require("../models/");

// ===========================================================
// API Routes
// ===========================================================
    
// Show last workout in the index/home page
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            console.log("RETRIEVED EXERCISE OBJECT: ");
            console.log(dbWorkout);
            res.json(dbWorkout);
        }).catch(error => {
            res.status(400).json(error);
        });
});

// Add a workout in the exercise page
router.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(error => {
            res.status(400).json(error);
        });
});

// Update a workout
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
        { _id: req.params.id },
        { $push: {exercises: req.body}}
    ).then (dbWorkout => {
        res.json(dbWorkout);
    }).catch (error => {
        res.json(error);
    });
});

// View several workouts while in the stats page
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .sort({ _id: -1 })
        .then(dbWorkout => {
            console.log("EXERCISE RANGE OBJECT: ");
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