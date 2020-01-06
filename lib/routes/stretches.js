const { Router } = require('express');
const Stretch = require('../models/Stretch');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()

  .post('/', ensureAuth, (req, res, next) => {
    Stretch
      .create(req.body)
      .then(stretch => res.send(stretch))
      .catch(next);
  })

  .get('/:id', ensureAuth, (req, res, next) => {
    Stretch
      .findById(req.params.id)
      .then(stretch => {
        res.send(stretch);
      })

      .catch(next);
  })

  .get('/', ensureAuth, (req, res, next) => {
    Stretch
      .find()
      .then(stretches => res.send(stretches))
      .catch(next);
  })

  .patch('/:id', ensureAuth, (req, res, next) => {
    Stretch
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(stretch => res.send(stretch))
      .catch(next);
  })

  .delete('/:id', ensureAuth, (req, res, next) => {
    Stretch
      .findByIdAndDelete(req.params.id)
      .then(stretch => res.send(stretch))
      .catch(next);
  });
