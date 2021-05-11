const providers = [
  {
    service_provider_id: 1,
    service_type_id: 1,
    profile_id: '00uk9lxaulDYOiB4H5d6',
  },
  {
    service_provider_id: 2,
    service_type_id: 2,
    profile_id: '00uk9lxaulDYOiB4H5d6',
  },
  {
    service_provider_id: 3,
    service_type_id: 1,
    profile_id: '00unr8nm2sJkxkcrH5d6',
  },
  {
    service_provider_id: 4,
    service_type_id: 3,
    profile_id: '00unr8nm2sJkxkcrH5d6',
  },
];

exports.seed = function (knex) {
  return knex('services_providers').insert(providers);
};
