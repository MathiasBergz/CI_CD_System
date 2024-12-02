exports.up = function(knex) {
    return knex('knex_migrations')
      .insert({
        name: '20241202020039_create_table.js',
        batch: knex.fn.now(),  // Definindo o batch como o timestamp atual
        migration_time: knex.fn.now()  // Definindo o timestamp atual para a migração
      })
      .then(() => {
        console.log('Registro inserido com sucesso na tabela knex_migrations.');
      })
      .catch((err) => {
        console.error('Erro ao inserir o registro na tabela knex_migrations:', err);
        throw err;  // Repassa o erro para a migração falhar, se necessário
      });
  };
  
  exports.down = function(knex) {
    return knex('knex_migrations')
      .where('name', '20241202020039_create_table.js')
      .del()
      .then(() => {
        console.log('Registro removido com sucesso da tabela knex_migrations.');
      })
      .catch((err) => {
        console.error('Erro ao remover o registro na tabela knex_migrations:', err);
        throw err;  // Repassa o erro para a migração falhar, se necessário
      });
  };