exports.up = function (knex) {
  return knex.schema.createTable('programs', (tbl) => {
    tbl.increments('program_id').primary();
    tbl.string('name', 128).notNullable().unique();
    tbl.string('type', 128).notNullable();
    tbl.text('description').notNullable();
    tbl.timestamps(true,true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('programs_users').then(() => {
    return knex.schema.dropTableIfExists('programs')
  })
};
