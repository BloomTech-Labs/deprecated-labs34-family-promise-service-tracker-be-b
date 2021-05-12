const express = require('express');
const router = express.Router();
const Recipients = require('./recipientsModel');
router.get('/', (req, res) => {
  Recipients.getAll()
    .then((recipients) => {res.status(200).json(recipients);})
    .catch((err) => {res.status(500).json({ error: err.message });});
});
module.exports = router;