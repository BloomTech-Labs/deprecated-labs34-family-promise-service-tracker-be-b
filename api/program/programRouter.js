const express = require('express');
const DB = require('../utils/db-helper');
const Programs = require('./programModel');
const router = express.Router();
const { canCrudServiceType } = require('../middleware/authorization');

router.get('/', (req, res) => {
  Programs.findAll()
    .then((programs) => {
      res.status(200).json(programs);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Programs.findById(id)
    .then((program) => {
      if (program) {
        res.status(200).json(program);
      } else {
        res.status(404).json({ error: `Program ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  DB.create('programs', req.body)
    .then((newProgram) => {
      res.status(201).json(newProgram);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  // res.json({ id: id, changes: changes });
  Programs.updateById(id, changes)
    .then((program) => {
      res.status(200).json(program);
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Programs.deleteById(id)
    .then((program) => {
      res.status(200).json(program);
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});

router.get('/profile/:id', (req, res, next) => {
  // const id = req.params; // should just be == to :id in path
  const profId = req.params.id;
  Programs.findByProfileId(profId)
    .then((program) => {
      res.status(200).json(program);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
