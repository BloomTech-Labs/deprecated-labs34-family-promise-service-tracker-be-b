const statuses = [
  {
    status_id: 1,
    name: 'Complete',
  },
  {
    status_id: 2,
    name: 'In Progress',
  },
  {
    status_id: 3,
    name: 'Needs Followup',
  },
  {
    status_id: 4,
    name: 'Not Started',
  },
];

exports.seed = function (knex) {
  return knex('statuses').insert(statuses);
};
