const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now(),
    },
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
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
exerciseSchema.virtual('totalDuration').get(function(){
    return this.exercises.reduce((tot, ex) =>{
        return tot + ex.duration;
    }, 0)
});
const Exercise = mongoose.model('dbExercises', exerciseSchema);

module.exports = Exercise;
