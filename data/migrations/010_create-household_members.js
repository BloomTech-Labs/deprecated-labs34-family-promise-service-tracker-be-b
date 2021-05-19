
exports.up = function(knex) {
    return knex.schema.createTable('household_members', function (tbl) {
        tbl.increments('household_member_id').primary();
        tbl
        .integer('household_id')
        .unsigned()
        .notNullable()
        .references('household_id')
        .inTable('households')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl
        .integer('recipient_id')
        .unsigned()
        .notNullable()
        .references('recipient_id')
        .inTable('recipients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('household_members');
};
