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
  const p_mTable = await knex('program_managers').where({
    profile_id: profile_id,
  });
  // use forEach to return all profile_id's
  let idArr = [];
  p_mTable.forEach((id) => {
    idArr.push(id.program_id);
  });

  // return from Programs programs that...
  // match any of the numbers in the forEach

  return knex('programs').whereIn('program_id', idArr);

  // return knex('programs').where({ program_id: p_mTable[0].program_id });
};

const deleteById = async (id) => {};

module.exports = {
  findAll,
  findById,
  findByProfileId,
  deleteById,
};
