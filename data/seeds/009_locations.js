const locations = [
  {
    location_id: 1,
    name: 'Smith Residence',
    country: 'United States of America',
    state: 'Washington',
    city: 'Seattle',
    zip: '98101',
    address: '123 Terrance Ave',
  },
  {
    location_id: 2,
    name: 'California Mission',
    country: 'United States of America',
    state: 'California',
    city: 'Los Angeles',
    zip: '90001',
    address: '5828 Carson Dr',
  },
  {
    location_id: 3,
    name: 'Massachusetts Shelter',
    country: 'United States of America',
    state: 'Massachusetts',
    city: 'Boston',
    zip: '01001',
    address: '492 Beverley Way',
  },
  {
    location_id: 4,
    name: 'Jackson Residence',
    country: 'United States of America',
    state: 'Colorado',
    city: 'Denver',
    zip: '80013',
    address: '9475 N Broadway Ave',
  },
];

exports.seed = function (knex) {
  return knex('locations').insert(locations);
};
