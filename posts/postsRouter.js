const express = require('express');

const db = require('../data/db');

const router = express.Router();

router.get('/', (req, res) => db.find().then(posts => res.status(200).json(posts)).catch(err => res.status(500).json({errorMessage: 'The posts information could not be retrieved.', error: err})));

router.post('/', (req, res) => {
  if(!req.body.title || !req.body.contents){
    res.status(400).json({errorMessage: 'Please provide title and contents for the post.'})
  } else {
    db.insert(req.body)
      .then(id => db.findById(id.id).then(post => res.status(201).json(post)).catch(err => res.status(500).json({errorMessage: 'The posts information could not be retrieved.', error: err})))
      .catch(err => res.status(500).json({errorMessage: 'The posts information could not be retrieved.', error: err}));
  }
})

router.get('/:id', (req, res) => {
  db.findById(req.params.id)
    .then(post => post.length === 0 ? res.status(404).json({errorMessage: 'Post not found...'}) : res.status(200).json(post))
    .catch(err => res.status(500).json({errorMessage: 'The post information could not be retrieved.', error: err}));
})

module.exports = router;