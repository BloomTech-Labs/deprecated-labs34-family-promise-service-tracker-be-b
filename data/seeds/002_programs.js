const programs = [
  {
    program_id: 1,
    name: 'Prevention',
    type: 'Prevention',
    description: 'This is the prevention program',
  },
  {
    program_id: 2,
    name: 'Sheltering',
    type: 'Sheltering',
    description: 'This is the sheltering program',
  },
  {
    program_id: 3,
    name: 'Aftercare',
    type: 'Aftercare',
    description: 'This is the aftercare program',
  },
];

exports.seed = function (knex) {
  return knex('programs').insert(programs);
};
