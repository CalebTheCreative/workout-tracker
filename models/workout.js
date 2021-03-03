// ===========================================================
// Dependencies
// ===========================================================
const mongoose = require("mongoose");

// ===========================================================
// Model Schema
// ===========================================================
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type:
                {
                    type: String,
                    trim: true,
                    required: "Enter a type of workout"
                },
                name:
                {
                    type: String,
                    trim: true,
                    required: "Enter a name for your workout"
                },
                duration:
                {
                    type: Number,
                    required: "Enter the duration (min) for your workout"
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
    },
    {
        toJSON: {
            virtuals: true,
        },
    });

workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => total + exercise.duration,0);
});

// ===========================================================
// Setup for export
// ===========================================================
const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;
