const ethnicities = [
  {
    ethnicity_id: 1,
    ethnicity: 'White',
  },
  {
    ethnicity_id: 2,
    ethnicity: 'Hispanic',
  },
  {
    ethnicity_id: 3,
    ethnicity: 'Asian',
  },
  {
    ethnicity_id: 4,
    ethnicity: 'African American',
  },
];

exports.seed = function (knex) {
  return knex('ethnicity').insert(ethnicities);
};
