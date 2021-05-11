exports.up = function (knex) {
  return knex.schema.createTable('service_entries', (tbl) => {
    tbl.increments('service_entries_id').primary();
    tbl.date('service_time').notNullable();
    tbl
      .integer('service_type_id')
      .unsigned()
      .notNullable()
      .references('service_type_id')
      .inTable('service_types')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    tbl
      .integer('recipient_id')
      .unsigned()
      .notNullable()
      .references('recipient_id')
      .inTable('recipients')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    tbl
      .integer('location_id')
      .unsigned()
      .references('location_id')
      .inTable('locations')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    tbl
      .integer('status_id')
      .unsigned()
      .notNullable()
      .references('status_id')
      .inTable('statuses')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    tbl.integer('quantity').unsigned();
    tbl.decimal('value');
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('service_entries');
};
