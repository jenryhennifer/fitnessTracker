const router = require('express').Router();
const Exercise = require('../models/exercises');
// const { model } = reqire('../models/exercises')

router.post('/api/workouts',({ body }, res) => {
    Exercise.create(body)
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

router.put('/api/workouts/:id', ({body, params},res) =>{
    Exercise.findByIdAndUpdate(
        params.id,
        {$push:{exercises: body}},
        {new: true, runValidators: true}
    )
    .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
})

router.get('/api/workouts', ({body}, res) => {
  Exercise.find()
    .sort({ date: -1 })
    .then((dbExercise) => {
      res.json(dbExercise).catch((err) => {
        res.status(400).json(err);
      });
    });
});

router.get('/api/workouts/:id', ({ body }, res) =>{
    Exercise.find(body.id)
    .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
})

//sets a limit range to the data
//limits at 10
router.get('/api/workouts/range', ({body}, res) =>{
    Exercise.find().limit(10)
    .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
})


module.exports = router;
