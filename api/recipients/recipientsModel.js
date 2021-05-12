const knex = require('../../data/db-config');
const getAll = () => {
  return knex('recipients');
};
module.exports = {
  getAll,
};