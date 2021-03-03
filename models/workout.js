// ===========================================================
// Dependencies
// ===========================================================
const mongoose = require("mongoose");

// ===========================================================
// Model Schema
// ===========================================================
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    workouts: [
        {
            type:
            {
                type: String,
                trim: true,
                required: "Enter a workout type"
            },
            name:
            {
                type: String,
                trim: true,
                required: "Enter a workout name"
            },
            duration:
            {
                type: Number,
                required: "Enter the duration (min)"
            },
            weight:
            {
                type: Number
            },
            reps:
            {
                type: Number
            },
            sets:
            {
                type: Number
            },
            distance:
            {
                type: Number
            }
        }
    ]
})

// ===========================================================
// Setup for export
// ===========================================================
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
