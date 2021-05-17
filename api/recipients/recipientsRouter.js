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
  // console.log('request recipient id', id);
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
router.put('/update/:id', (req, res, next) => {
  const id = req.params.id; // id of recipient we want to change
  console.log(id);
  const changes = req.body;
  console.log(changes);
  Recipients.updateById(id, changes)
    .then((recipient) => {
      res.status(200).json(recipient);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// BOTH FUNCTIONS BELOW ARE LOCKED BEHIND FOREIGN KEY CONSTRAINTS
// TO BE SORTED AS A TEAM

router.delete('/delete/:id', (req, res, next) => {
  Recipients.deleteById(req.params.id)
    .then((recipient) => {
      res
        .status(200)
        .json(
          `User ${recipient.firstname} ${recipient.middle} ${recipient.lastname} has been deleted`
        );
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// router.post('/new', (req, res, next) => {
//   let newPerson = req.body;
//   const ethnicity_id = newPerson.ethnicity_id;
//   delete newPerson.ethnicity_id;
//   console.log(newPerson, ethnicity_id);

//   Recipients.addRecipient(newPerson, ethnicity_id)
//     .then((recipient) => {
//       res.status(200).json(recipient);
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });
module.exports = router;
