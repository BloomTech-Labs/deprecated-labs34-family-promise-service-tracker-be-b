const knex = require('../../data/db-config');
const getAll = () => {
  return knex('statuses');
};

const getById = (id) => {
  return knex('statuses').where({ status_id: id });
};

module.exports = {
    getAll,
    getById,
  };