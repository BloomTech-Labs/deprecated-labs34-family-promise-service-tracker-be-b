const express = require('express');
const router = express.Router();
const Recipients = require('./recipientsModel');

// return all recipients
router.get('/', (req, res) => {
  Recipients.getAll()
    .then((recipients) => {
      res.status(200).json(recipients);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// return recipient by id
// perhaps make it variably be able to take multiple id's later?
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Recipients.getById(id)
    .then((recipient) => {
      res.status(200).json(recipient);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// COMMENTED OUT BECAUSE NOT QUITE FUNCTIONAL BUT NEARLY
// update a particular field of a recipient
// router.patch('/patch/:id', (req, res, next) => {
//   const id = req.params.id; // id of recipient we want to change
//   console.log(id);
//   const changes = req.body;
//   console.log(changes);
//   Recipients.patchById(id, changes)
//     .then((recipient) => {
//       res.status(200).json(recipient);
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });

module.exports = router;
