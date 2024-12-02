exports.up = function(knex) {
    return knex('registro')
      .insert([
        { name: 'Registro1', version: '1.0.0' }
      ])
      .then(() => {
        console.log('Registros inseridos com sucesso.');
      })
      .catch((err) => {
        console.error('Erro ao inserir os registros:', err);
      });
  };
  
  exports.down = function(knex) {
    return knex('registro')
      .whereIn('name', ['Registro1'])  // Exclui os registros inseridos
      .del()
      .then(() => {
        console.log('Registros deletados com sucesso.');
      })
      .catch((err) => {
        console.error('Erro ao deletar os registros:', err);
      });
  };