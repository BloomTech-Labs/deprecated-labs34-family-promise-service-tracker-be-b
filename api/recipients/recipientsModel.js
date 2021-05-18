const knex = require('../../data/db-config');
const getAll = () => {
  return knex('recipients');
};

const getById = (id) => {
  return knex('recipients').where({ recipient_id: id });
};

const create = async (newRecipient) => {
  const id = await knex('recipients').insert(newRecipient, 'recipient_id')
  console.log(id)
  return getById(id[0])
}

const update = async (id, changes) => {
  await knex('recipients').where('recipient_id', id).update(changes);
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
