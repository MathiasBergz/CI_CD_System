
exports.up = function(knex) {
    return knex.schema.createTable('Develop', function(table) {
        table.increments('id').primary(); // Coluna id com incremento automático e chave primária
        table.string('branch').notNullable(); // Coluna branch como string e não nula
        table.string('versao').notNullable(); // Coluna versão como string e não nula
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('branches'); // Remove a tabela caso precise reverter a migração
};