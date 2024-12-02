exports.up = function(knex) {
    return knex.schema.createTable('registro', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('version');
      table.timestamps();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('registro');
  };