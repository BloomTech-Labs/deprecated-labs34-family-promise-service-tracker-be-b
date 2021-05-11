const assignments = [
  {
    program_manager_id: 1,
    program_id: '1',
    profile_id: '00unr48onuAmU9sxK5d6',
  },
  {
    program_manager_id: 2,
    program_id: '2',
    profile_id: '00unr48onuAmU9sxK5d6',
  },
  {
    program_manager_id: 3,
    program_id: '1',
    profile_id: '00uk9lxaulDYOiB4H5d6',
  },
];

exports.seed = function (knex) {
  return knex('programs_users').insert(assignments);
};
