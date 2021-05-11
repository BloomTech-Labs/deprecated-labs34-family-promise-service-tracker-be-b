
exports.up = function(knex) {
    return knex.schema.createTable('service_provider_pairs', function (tbl) {
        tbl.increments('service_provider_pairs_id').primary();
        tbl
        .integer('service_provider_id')
        .unsigned()
        .notNullable()
        .references('service_provider_id')
        .inTable('service_providers')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
        tbl
        .integer('service_entries_id')
        .unsigned()
        .notNullable()
        .references('service_entries_id')
        .inTable('service_entries')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
        tbl.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('service_provider_pairs');
};
