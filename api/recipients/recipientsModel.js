const knex = require('../../data/db-config');
const getAll = () => {
  return knex('recipients');
};

const getById = (id) => {
  return knex('recipients').where({ recipient_id: id });
};

const updateById = async (id, changes) => {
  // await knex('recipients').where({ recipient_id: id }).update(changes);
  await knex('recipients').where({ recipient_id: id }).update(changes);

  return knex('recipients').where({ recipient_id: id });
};

// BOTH FUNCTIONS BELOW ARE LOCKED BEHIND FOREIGN KEY CONSTRAINTS
// TO BE SORTED AS A TEAM

const deleteById = async (id) => {
  await knex('household_members').where({ recipient_id: id }).del();
  knex('recipients').where({ recipient_id: id }).del();
};

// const addRecipient = async (person, ethnicity_id) => {
//   // await knex('recipients').insert(person);

// };
module.exports = {
  getAll,
  getById,
  updateById,
  deleteById,
  // addRecipient,
};
