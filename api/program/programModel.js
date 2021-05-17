const knex = require('../../data/db-config');

const findAll = async () => {
  return await knex('programs');
};

const findById = (id) => {
  return knex('programs').where({ program_id: id });
};

const findByProfileId = async (profile_id) => {
  // need access to current logged in profile
  /*
    use that profile_id to ask Programs_Managers...
    which programs it is related to
  */
};

const deleteById = async (id) => {};

module.exports = {
  findAll,
  findById,
  findByProfileId,
  deleteById,
};
