const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//template for DB data
const exerciseSchema = new Schema(
  {
    //stores what day it is using current times
    day: {
      type: Date,
      default: Date.now(),
    },
    //array of exercise information
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: 'please give exercise type',
        },
        name: {
          type: String,
          trim: true,
          required: 'please give exercise name',
        },
        duration: {
          type: Number,
          trim: true,
          requried: 'please give duration',
        },
        distance: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//adds all the exercise times together to create total duration
exerciseSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((tot, ex) => {
    return tot + ex.duration;
  }, 0);
});

//creates the model to be used inside the API routes
const Exercise = mongoose.model('dbExercises', exerciseSchema);

//exported to API routes
module.exports = Exercise;
