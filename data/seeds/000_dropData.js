exports.seed = async function (knex) {
  // Truncate instead of delete all tables to wipe PKs
  await knex.raw(
    'ALTER SEQUENCE service_notes_id_seq RESTART WITH 1; TRUNCATE service_notes CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE service_entries_profiles_id_seq RESTART WITH 1; TRUNCATE services_provider_pairs CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE role_id_seq RESTART WITH 1; TRUNCATE roles CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE household_id_seq RESTART WITH 1; TRUNCATE households CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE household_member_id_seq RESTART WITH 1; TRUNCATE household_members CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE ethnicity_id_seq RESTART WITH 1; TRUNCATE ethnicity CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE location_id_seq RESTART WITH 1; TRUNCATE locations CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE recipient_id_seq RESTART WITH 1; TRUNCATE recipients CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE services_providers_id_seq RESTART WITH 1; TRUNCATE services_providers CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE service_entries_id_seq RESTART WITH 1; TRUNCATE service_entries CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE service_types_id_seq RESTART WITH 1; TRUNCATE service_types CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE statuses_id_seq RESTART WITH 1; TRUNCATE statuses CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE programs_managers_id_seq RESTART WITH 1; TRUNCATE programs_users CASCADE'
  );
  await knex.raw(
    'ALTER SEQUENCE programs_id_seq RESTART WITH 1; TRUNCATE programs CASCADE'
  );
  await knex.raw('TRUNCATE profiles CASCADE');
};
