exports.up = function (knex) {
  return knex.schema.createTable('service_providers', (tbl) => {
    tbl.increments('service_provider_id').primary();
    tbl
      .integer('service_type_id')
      .unsigned()
      .notNullable()
      .references('service_type_id')
      .inTable('service_types')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    tbl
      .string('profile_id')
      .unsigned()
      .notNullable()
      .references('profile_id')
      .inTable('profiles')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('services_providers');
};
