const router = require('express').Router();
const Exercise = require('../models/exercises');
// const { model } = reqire('../models/exercises')

router.get('/api/exercises', (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then((dbExercise) => {
      res.json(dbExercise).catch((err) => {
        res.status(400).json(err);
      });
    });
});

router.post('/api/workouts',({ body }, res) => {
    Exercise.create(body)
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

router.get('/api/workouts/:id', ({ body, params}, res) =>{
    Exercise.findOne({})
})

router.get('/api/workouts/range', ({body}, res) =>{
    
})


module.exports = router;
