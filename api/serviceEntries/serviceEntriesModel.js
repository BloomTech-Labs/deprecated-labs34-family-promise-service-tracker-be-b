const knex = require('../../data/db-config');

const getAll = () => {
  return knex('service_entries');
};

const getById = (id) => {
  return knex('service_entries').where('service_entries_id', id).first();
};

const create = async (serviceEntry) => {
  const [id] = await knex('service_entries').insert(
    serviceEntry,
    'service_entries_id'
  );
  return getById(id);
};

const update = async (id, changes) => {
  await knex('service_entries').where('service_entries_id', id).update(changes);
  return getById(id);
};

const remove = async (id) => {
  return await knex('service_entries').where('service_entries_id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
