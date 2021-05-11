const roles = [
  {
    role_id: 1,
    role: 'Administrator',
  },
  {
    role_id: 2,
    role: 'Program Manager',
  },
  {
    role_id: 3,
    role: 'Service Provider',
  },
];

exports.seed = function (knex) {
  return knex('roles').insert(roles);
};
