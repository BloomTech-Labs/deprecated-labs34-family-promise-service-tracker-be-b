const knex = require('../../data/db-config');
const getAll = () => {
  return knex('recipients');
};

const getById = (id) => {
  return knex('recipients').where({ recipient_id: id });
};

// COMMENTED OUT BECAUSE NOT QUITE FUNCTIONAL BUT NEARLY
// const patchById = async (id, changes) => {
//   return await knex('recipients').where({ recipient_id: id }).update(changes);
// };
module.exports = {
  getAll,
  getById,
  // patchById,
};
