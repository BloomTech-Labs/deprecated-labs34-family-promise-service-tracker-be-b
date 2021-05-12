const statuses = [
  {
    status_id: 1,
    status: 'Complete',
  },
  {
    status_id: 2,
    status: 'In Progress',
  },
  {
    status_id: 3,
    status: 'Needs Followup',
  },
  {
    status_id: 4,
    status: 'Not Started',
  },
];

exports.seed = function (knex) {
  return knex('statuses').insert(statuses);
};
