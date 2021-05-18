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

router.post('/', async (req, res, next) => {
  try{
    console.log(req.body)
    const newRecipient = await Recipients.create(req.body)
    console.log(newRecipient)
    res.status(200).json(newRecipient)
  } catch(err){
    next(err)
  }
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Recipients.update(id, changes)
    .then((editedEntry) => {
      res.status(200).json(editedEntry);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Recipients.remove(id)
    .then((count) => {
      if (count > 0) {
        res
          .status(200)
          .json({ message: `Recipient ${id} has been removed` });
      } else {
        res
          .status(404)
          .json({ message: `Recipient ${id} could not be found` });
      }
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
