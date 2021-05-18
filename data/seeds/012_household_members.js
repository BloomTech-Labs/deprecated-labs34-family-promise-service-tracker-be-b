const householdMembers = [
  {
    household_id: 1,
    recipient_id: 1,
  },
  {
    household_id: 2,
    recipient_id: 2,
  },
  {
    household_id: 3,
    recipient_id: 3,
  },
  {
    household_id: 4,
    recipient_id: 4,
  },
];

exports.seed = function (knex) {
  return knex('household_members').insert(householdMembers);
};
